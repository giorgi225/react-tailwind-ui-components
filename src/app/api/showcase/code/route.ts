import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const componentName = searchParams.get("component");
  const fileParam = searchParams.get("path");

  if (!componentName || !fileParam) {
    return NextResponse.json({ error: "Missing path or component" }, { status: 400 });
  }

  const safeBase = path.join(process.cwd(), "src/showcase");
  const resolvedPath = path.join(safeBase, fileParam);

  if (!resolvedPath.startsWith(safeBase) || !fs.existsSync(resolvedPath)) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }

  const fileContent = fs.readFileSync(resolvedPath, "utf-8");

  // ✅ Extract all imports
  const allImports =
    fileContent.match(/^import[\s\S]*?from\s+["'][^"']+["'];?/gm) || [];

  // ✅ Extract all top-level variable declarations (with types)
  const varMatches = Array.from(
    fileContent.matchAll(
      /^(?:export\s+)?(?:const|let|var)\s+([A-Za-z0-9_]+)\s*(?::[\s\S]*?)?=\s*[\s\S]*?(?=^export|^import|\Z)/gm
    )
  );
  const topLevelVars = varMatches.map(([, name]) => name);

  // ✅ Extract requested component
  const fnRegex = new RegExp(
    `export\\s+function\\s+${componentName}\\s*\\([\\s\\S]*?\\n\\}`,
    "m"
  );
  const fnMatch = fileContent.match(fnRegex);

  if (!fnMatch) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }

  const fnCode = fnMatch[0];

  // ✅ Detect which top-level vars are referenced
  const usedVars = topLevelVars.filter((v) =>
    new RegExp(`\\b${v}\\b`).test(fnCode)
  );

  // ✅ Extract used variable blocks fully
  const usedVarBlocks = usedVars.map((v) => {
    const block = fileContent.match(
      new RegExp(
        `^(?:export\\s+)?(?:const|let|var)\\s+${v}\\s*(?::[\\s\\S]*?)?=\\s*[\\s\\S]*?(?=^export|^import|\\Z)`,
        "m"
      )
    );
    return block ? block[0].trim() : "";
  });

  // ✅ Filter imports that are actually used
  const usedImports: string[] = [];
  for (const imp of allImports) {
    const importPathMatch = imp.match(/from\s+["']([^"']+)["']/);
    const importPath = importPathMatch ? importPathMatch[1] : null;

    const namedMatch = imp.match(/{([^}]+)}/);
    const defaultMatch = imp.match(/^import\s+([A-Za-z0-9_*]+)\s+from/);

    const namedImports = namedMatch
      ? namedMatch[1]
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
      : [];

    const defaultImport = defaultMatch ? defaultMatch[1].trim() : null;

    const codeToScan = fnCode + "\n" + usedVarBlocks.join("\n");

    const usedNamed = namedImports.filter((id) =>
      new RegExp(`\\b${id}\\b`).test(codeToScan)
    );

    const useDefault =
      defaultImport && new RegExp(`\\b${defaultImport}\\b`).test(codeToScan);

    if (useDefault || usedNamed.length > 0) {
      const parts: string[] = [];
      if (useDefault) parts.push(defaultImport);
      if (usedNamed.length > 0)
        parts.push(`{ ${usedNamed.join(", ")} }`);
      usedImports.push(`import ${parts.join(", ")} from "${importPath}";`);
    }
  }

  // ✅ Format clean code output
  const sections = [
    ...usedImports.map((i) => i.trim()),
    " ",
    ...usedVarBlocks.map((v) => v.trim()),
    fnCode.trim(),
  ].filter(Boolean);

  const finalCode = sections.join("\n");

  return NextResponse.json({ code: finalCode });
}