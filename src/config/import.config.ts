export const buttonImport = `import { $$$imports } from "@/components/common/button";`;

export const createImport = (importPath: string, replaceValue: string): string => {
    return importPath.replace("$$$imports", replaceValue)
}