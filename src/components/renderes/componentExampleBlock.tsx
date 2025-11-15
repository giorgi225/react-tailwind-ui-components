"use client;";
import { ComponentExampleBlockType } from "@/config/components/base.config";
import { Heading, Paragraph, Strong } from "@/components/ui/common/typography";
import { useState } from "react";
import { Code, Eye } from "iconsax-reactjs";
import { Button } from "../ui/common/button";
import { Loader } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
type Props = {
  config: ComponentExampleBlockType;
};

export default function ComponentExampleBlock({ config }: Props) {
  const [code, setCode] = useState<string>("");
  const [showCode, setShowCode] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCodeShow = async () => {
    if (loading) return;

    if (code) {
      setShowCode((prev) => !prev);
      return;
    }

    setLoading(true);

    const res = await fetch(
      `/api/showcase/code?path=${config.codePath}&component=${config.componentName}`
    );
    if (!res.ok) {
      setLoading(false);
      return;
    }

    const data = await res.json();

    setCode(data.code);
    setShowCode(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col space-y-4">
      {(config.title || config.description) && (
        <div className="flex flex-col gap-1">
          {config.title && <Heading level={`h3`}>{config.title}</Heading>}
          {config.description && <Paragraph>{config.description}</Paragraph>}
        </div>
      )}

      <div className="relative w-full border border-border rounded-lg overflow-hidden">
        {config.Preview}

        <div className="w-full flex items-center bg-background p-3 gap-1 border-t border-border">
          <div className="flex items-center gap-3 pl-4 text-sm font-medium text-[#3279c6]">
            {(showCode || loading) && <Strong>TS</Strong>}
            {loading && <Loader className="animate-spin size-4" />}
          </div>

          <Button size={`xs_icon`} variant={`ghost`} className="ml-auto">
            <Eye variant="Linear" className="size-4!" />
          </Button>
          <Button onClick={handleCodeShow} size={`xs_icon`} variant={`ghost`}>
            <Code variant="Linear" className="size-4!" />
          </Button>
        </div>

        {showCode && (
          <div className="bg-background border-t border-border">
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
              wrapLongLines={true}
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                lineHeight: 1.5,
                fontSize: "0.875rem",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
}
