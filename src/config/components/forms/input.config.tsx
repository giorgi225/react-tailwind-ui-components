import { ComponentShowcaseType } from "../base.config";
import { VariantProps } from "class-variance-authority";

import { inputVariants } from "@/components/ui/forms/input";
import {
  InputAffixes,
  InputAmount,
  InputControlled,
  InputInteractive,
  InputSizes,
  InputStates,
  InputVariants,
  InputWithForm,
} from "@/showcase/forms/input.showcase";

type ComponentVariants = VariantProps<typeof inputVariants>;

const variants: {
  [K in keyof ComponentVariants]: ComponentVariants[K] extends boolean
    ? boolean[]
    : NonNullable<ComponentVariants[K]>[];
} = {
  variant: ["solid", "bordered", "underlined", "faded"],
  size: ["xs", "sm", "md", "lg"],
  state: ["default", "error", "success", "warning"],
};

export const inputConfig: ComponentShowcaseType = {
  title: "Input Component",
  description:
    "A versatile input field component supporting multiple variants, sizes, states, prefixes, suffixes, and interactive elements like password visibility toggles.",
  examples: [
    {
      title: "Variants",
      description:
        "Different visual styles for the input field to fit various use cases and design systems.",
      blocks: [
        {
          Preview: <InputVariants />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputVariants",
        },
      ],
    },
    {
      title: "Sizes",
      description:
        "Responsive sizing system for different contexts and layout densities.",
      blocks: [
        {
          Preview: <InputSizes />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputSizes",
        },
      ],
    },
    {
      title: "States",
      description:
        "Visual feedback for validation and input status indicators.",
      blocks: [
        {
          Preview: <InputStates />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputStates",
        },
      ],
    },

    {
      title: "Prefix and Suffix",
      description:
        "Add icons, text, or buttons before or after the input for better context and interaction.",
      blocks: [
        {
          Preview: <InputAffixes />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputAffixes",
        },
      ],
    },
    {
      title: "Interactive Input",
      description:
        "Use the suffix as a button or interactive element, such as toggling password visibility.",
      blocks: [
        {
          Preview: <InputInteractive />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputInteractive",
        },
      ],
    },
    {
      title: "Controlled Inputs",
      description:
        "Showcases controlled inputs where the value is managed by React state. Useful for forms and dynamic input handling.",
      blocks: [
        {
          Preview: <InputControlled />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputControlled",
        },
      ],
    },
    {
      title: "Amount Input",
      description:
        "Demonstrates inputs designed for numeric or currency values, including optional suffixes like currencies or units. Useful for financial or e-commerce forms.",
      blocks: [
        {
          Preview: <InputAmount />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputAmount",
        },
      ],
    },
    {
      title: "Form Integration",
      description:
        "Demonstrates how to integrate the input component with React Hook Form and Zod validation for structured forms.",
      blocks: [
        {
          Preview: <InputWithForm />,
          codePath: "/forms/input.showcase.tsx",
          componentName: "InputWithForm",
        },
      ],
    },
  ],
  apis: [
    {
      title: "Input API",
      api: [
        {
          prop: "variant",
          description: "Determines the visual style of the input field.",
          types: ["bordered", "solid", "underlined", "faded"],
          default: `"bordered"`,
        },
        {
          prop: "size",
          description:
            "Controls the input height and padding for different layout densities.",
          types: ["xs", "sm", "md", "lg"],
          default: `"md"`,
        },
        {
          prop: "state",
          description:
            "Applies semantic feedback colors for validation or status indication.",
          types: ["default", "error", "success", "warning"],
          default: `"default"`,
        },
        {
          prop: "type",
          description:
            "Specifies the native HTML input type (e.g., text, email, password).",
          types: [
            "text",
            "email",
            "password",
            "number",
            "search",
            "tel",
            "url",
            "date",
            "amount",
          ],
          default: `"text"`,
        },
        {
          prop: "prefix",
          description:
            "Optional element displayed inside the input on the left (e.g., icon or label).",
          types: ["React.ReactNode"],
          default: "undefined",
        },
        {
          prop: "prefixClassName",
          description:
            "Custom class names applied to the prefix wrapper for fine-tuned positioning or styling.",
          types: ["string"],
          default: "undefined",
        },
        {
          prop: "suffix",
          description:
            "Optional element displayed inside the input on the right (e.g., icon, button, or text).",
          types: ["React.ReactNode"],
          default: "undefined",
        },
        {
          prop: "suffixClassName",
          description:
            "Custom class names applied to the suffix wrapper for fine-tuned positioning or styling.",
          types: ["string"],
          default: "undefined",
        },
        {
          prop: "placeholder",
          description:
            "Text displayed when the input is empty, guiding user expectations.",
          types: ["string"],
          default: "undefined",
        },
        {
          prop: "disabled",
          description:
            "Disables input interactions and applies a muted visual state.",
          types: ["boolean"],
          default: "false",
        },
        {
          prop: "className",
          description:
            "Additional Tailwind or custom class names for further styling.",
          types: ["string"],
          default: "—",
        },
        {
          prop: "value",
          description: "Current input value (controlled component).",
          types: ["string", "number", "readonly string[]"],
          default: "—",
        },
        {
          prop: "defaultValue",
          description: "Initial input value (uncontrolled component).",
          types: ["string", "number"],
          default: "undefined",
        },
        {
          prop: "onChange",
          description:
            "Callback function triggered when the input value changes.",
          types: ["(event: React.ChangeEvent<HTMLInputElement>) => void"],
          default: "undefined",
        },
        {
          prop: "onFocus",
          description: "Callback function when the input gains focus.",
          types: ["(event: React.FocusEvent<HTMLInputElement>) => void"],
          default: "undefined",
        },
        {
          prop: "onBlur",
          description: "Callback function when the input loses focus.",
          types: ["(event: React.FocusEvent<HTMLInputElement>) => void"],
          default: "undefined",
        },
      ],
    },
  ],
};
