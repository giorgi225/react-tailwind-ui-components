"use client";
import { type ComponentShowcaseType } from "@/config/components/base.config";
import { Heading, Paragraph } from "../ui/common/typography";
import ComponentExample from "./componentExample";
import ComponentApiRenderer from "./componentApi";

type Props = {
  config: ComponentShowcaseType;
};

export default function ComponentShowcase({ config }: Props) {
  return (
    <div className="grid w-full h-full max-w-6xl mx-auto md:px-6 py-4 md:py-12 space-y-12 md:space-y-24">
      <div className="space-y-3">
        <Heading level={`h1`}>{config.title}</Heading>
        <Paragraph>{config.description}</Paragraph>
      </div>

      {config.examples.map((example, i) => (
        <ComponentExample key={i} config={example} />
      ))}

      {config.apis.map((api, i) => (
        <div className="flex flex-col gap-4 mt-4 md:mt-24" key={i} id="api">
          {api.title && <Heading level={`h4`}>{api.title}</Heading>}
          {api.description && <Paragraph>{api.description}</Paragraph>}
          <ComponentApiRenderer api={api.api} />
        </div>
      ))}
    </div>
  );
}
