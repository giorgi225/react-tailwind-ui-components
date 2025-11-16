"use client";
import { type ComponentExampleType } from "@/config/components/base.config";
import { Heading, Paragraph } from "../ui/common/typography";
import ComponentExampleBlock from "./componentExampleBlock";

type Props = {
  config: ComponentExampleType;
};

export default function ComponentExample({ config }: Props) {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="space-y-2">
        <Heading level={`h2`}>{config.title}</Heading>
        <Paragraph>{config.description}</Paragraph>
      </div>
      <div className="flex flex-col space-y-6 lg:space-y-12">
        {config.blocks.map((block, i) => (
          <ComponentExampleBlock key={i} config={block} />
        ))}
      </div>
    </div>
  );
}
