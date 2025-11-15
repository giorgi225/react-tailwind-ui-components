import { textareaVariants } from "@/components/ui/forms/textarea";
import { VariantProps } from "class-variance-authority";
import { ComponentShowcaseType } from "../base.config";
import {
  TextareaVariants,
  TextareaSizes,
  TextareaStates,
  TextareaAffixes,
  TextareaAutoResize,
  TextareaControlled,
  TextareaCharacterLimit,
  TextareaWithForm,
} from "@/showcase/forms/textarea.showace";

type ComponentVariants = VariantProps<typeof textareaVariants>;

const variants: {
  [K in keyof ComponentVariants]: ComponentVariants[K] extends boolean
    ? boolean[]
    : NonNullable<ComponentVariants[K]>[];
} = {
  variant: ["solid", "bordered", "underlined", "faded"],
  size: ["xs", "sm", "md", "lg"],
  state: ["default", "error", "success", "warning"],
};

export const textareaConfig: ComponentShowcaseType = {
  title: "Textarea Component",
  description:
    "A versatile multi-line text input component supporting multiple variants, sizes, states, prefixes, suffixes, auto-resize behavior, and character limits.",
  examples: [
    {
      title: "Variants",
      description:
        "Different visual styles for the textarea field to fit various use cases and design systems.",
      blocks: [
        {
          Preview: <TextareaVariants />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaVariants",
        },
      ],
    },
    {
      title: "Sizes",
      description:
        "Responsive sizing system for different contexts and layout densities.",
      blocks: [
        {
          Preview: <TextareaSizes />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaSizes",
        },
      ],
    },
    {
      title: "States",
      description:
        "Visual feedback for validation and input status indicators.",
      blocks: [
        {
          Preview: <TextareaStates />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaStates",
        },
      ],
    },
    {
      title: "Prefix and Suffix",
      description:
        "Add icons, text, or buttons before or after the textarea for better context and interaction.",
      blocks: [
        {
          Preview: <TextareaAffixes />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaAffixes",
        },
      ],
    },
    {
      title: "Auto Resize",
      description:
        "Textarea can automatically adjust its height based on content, providing better user experience for dynamic content.",
      blocks: [
        {
          Preview: <TextareaAutoResize />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaAutoResize",
        },
      ],
    },
    {
      title: "Controlled Textareas",
      description:
        "Showcases controlled textareas where the value is managed by React state. Useful for forms and dynamic content handling.",
      blocks: [
        {
          Preview: <TextareaControlled />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaControlled",
        },
      ],
    },
    {
      title: "Character Limit",
      description:
        "Demonstrates textareas with character counting and validation, useful for forms with length constraints like bios, comments, or messages.",
      blocks: [
        {
          Preview: <TextareaCharacterLimit />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaCharacterLimit",
        },
      ],
    },
    {
      title: "Textarea with Form",
      description:
        "Demonstrates how to use the Textarea component inside a form with validation using react-hook-form and Zod.",
      blocks: [
        {
          Preview: <TextareaWithForm />,
          codePath: "/forms/textarea.showcase.tsx",
          componentName: "TextareaWithForm",
        },
      ],
    },
  ],
  apis: [
    {
      title: "Textarea API",
      api: [
        {
          prop: "variant",
          description: "Determines the visual style of the textarea field.",
          types: ["bordered", "solid", "underlined", "faded"],
          default: `"bordered"`,
        },
        {
          prop: "size",
          description:
            "Controls the textarea minimum height and padding for different layout densities.",
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
          prop: "autoResize",
          description:
            "Automatically adjusts the textarea height to fit the content.",
          types: ["boolean"],
          default: "false",
        },
        {
          prop: "prefix",
          description:
            "Optional element displayed inside the textarea on the left (e.g., icon or label).",
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
            "Optional element displayed inside the textarea on the right (e.g., icon, button, or text).",
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
            "Text displayed when the textarea is empty, guiding user expectations.",
          types: ["string"],
          default: "undefined",
        },
        {
          prop: "disabled",
          description:
            "Disables textarea interactions and applies a muted visual state.",
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
          description: "Current textarea value (controlled component).",
          types: ["string", "number", "readonly string[]"],
          default: "—",
        },
        {
          prop: "defaultValue",
          description: "Initial textarea value (uncontrolled component).",
          types: ["string", "number"],
          default: "undefined",
        },
        {
          prop: "onChange",
          description:
            "Callback function triggered when the textarea value changes.",
          types: ["(event: React.ChangeEvent<HTMLTextAreaElement>) => void"],
          default: "undefined",
        },
        {
          prop: "onFocus",
          description: "Callback function when the textarea gains focus.",
          types: ["(event: React.FocusEvent<HTMLTextAreaElement>) => void"],
          default: "undefined",
        },
        {
          prop: "onBlur",
          description: "Callback function when the textarea loses focus.",
          types: ["(event: React.FocusEvent<HTMLTextAreaElement>) => void"],
          default: "undefined",
        },
        {
          prop: "rows",
          description: "Number of visible text lines for the textarea.",
          types: ["number"],
          default: "3",
        },
      ],
    },
  ],
};
