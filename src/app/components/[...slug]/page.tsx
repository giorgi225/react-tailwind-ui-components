import ComponentShowcase from "@/components/renderes/componentShowcase";
import {
  ComponentKey,
  componetShowcaseConfig,
  validComponentKeys,
} from "@/config/components/base.config";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const componentKey = slug[slug.length - 1];

  const isValidComponentKey = validComponentKeys().includes(
    componentKey as ComponentKey
  );

  if (!isValidComponentKey) return notFound();

  const componentShowcaseConfig =
    componetShowcaseConfig[componentKey as ComponentKey];

  if (!componentShowcaseConfig) return notFound();
  
  return <ComponentShowcase config={componentShowcaseConfig} />;
}
