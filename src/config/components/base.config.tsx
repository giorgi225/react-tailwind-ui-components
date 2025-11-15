import { ReactNode } from "react";
import { buttonConfig } from "./common/button.config";
import { typographyConfig } from "./common/typography.config";
import { inputConfig } from "./forms/input.config";
import { textareaConfig } from "./forms/textarea.config";

export const baseRoutePaths = {
  components: "/components",
} as const;

export const componentStructure = {
  common: ["button", "typography"],
  forms: [
    "input",
    "textarea",
    "select-comming-soon",
    "checkbox-comming-soon",
    "radio-comming-soon",
  ],
  feedback: ["alert-comming-soon", "toast-comming-soon", "modal-comming-soon"],
  dataDisplay: [
    "table-comming-soon",
    "card-comming-soon",
    "badge-comming-soon",
  ],
} as const;

export type ComponentCategory = keyof typeof componentStructure;
export type ComponentKey =
  (typeof componentStructure)[ComponentCategory][number];

export const validComponentKeys = (): ComponentKey[] => {
  return Object.values(componentStructure).flat() as ComponentKey[];
};

export type ComponentApi = {
  prop: string;
  description: string;
  types: string[];
  default: string;
};

export type ComponentApiBlock = {
  title?: string;
  description?: string;
  api: ComponentApi[];
};

export type ComponentExampleBlockType = {
  title?: string;
  description?: string;
  Preview: ReactNode;
  codePath: string;
  componentName: string;
};

export type ComponentExampleType = {
  title: string;
  description: string;
  blocks: ComponentExampleBlockType[];
};

export type ComponentShowcaseType = {
  title: string;
  description: string;
  examples: ComponentExampleType[];
  apis: ComponentApiBlock[];
};

export const componetShowcaseConfig: Partial<
  Record<ComponentKey, ComponentShowcaseType>
> = {
  button: buttonConfig,
  typography: typographyConfig,
  input: inputConfig,
  textarea: textareaConfig,
  // select: { title: "", description: "", examples: [], apis: [] },
  // checkbox: { title: "", description: "", examples: [], apis: [] },
  // radio: { title: "", description: "", examples: [], apis: [] },
  // alert: { title: "", description: "", examples: [], apis: [] },
  // toast: { title: "", description: "", examples: [], apis: [] },
  // modal: { title: "", description: "", examples: [], apis: [] },
  // table: { title: "", description: "", examples: [], apis: [] },
  // card: { title: "", description: "", examples: [], apis: [] },
  // badge: { title: "", description: "", examples: [], apis: [] },
};
