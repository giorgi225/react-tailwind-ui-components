import { buttonVariants } from "@/components/ui/common/button";
import { ComponentShowcaseType } from "../base.config";
import { VariantProps } from "class-variance-authority";
import {
  ButtonColors,
  ButtonComposition,
  ButtonDefaultSizes,
  ButtonDisabled,
  ButtonIconOnly,
  ButtonIconSizes,
  ButtonIconText,
  ButtonLoading,
  ButtonShapes,
  ButtonVariants,
} from "@/showcase/common/button.showcase";

type ComponentVariants = VariantProps<typeof buttonVariants>;

const variants: {
  [K in keyof ComponentVariants]: ComponentVariants[K] extends boolean
    ? boolean[]
    : NonNullable<ComponentVariants[K]>[];
} = {
  variant: ["solid", "outline", "ghost", "flat", "link"],
  color: [
    "default",
    "primary",
    "secondary",
    "danger",
    "success",
    "warning",
    "info",
  ],
  size: ["xs", "sm", "md", "lg", "xs_icon", "sm_icon", "md_icon", "lg_icon"],
  shape: ["rounded", "square", "circle"],
  disabled: [true, false],
  loading: [true, false],
};

export const buttonConfig: ComponentShowcaseType = {
  title: "Button",
  description:
    "A versatile button component with multiple variants, colors, sizes, and states for all your UI needs.",
  examples: [
    {
      title: "Variant",
      description:
        "Choose from different visual styles to match your design system and use case requirements.",
      blocks: [
        {
          Preview: <ButtonVariants />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonVariants",
        },
      ],
    },
    {
      title: "Color",
      description: `Demonstrates how each button variant (${variants.variant?.join(
        ", "
      )}) looks with all available color options (${variants.color?.join(", ")}), helping you choose the right combination for your UI design.`,
      blocks: [
        {
          Preview: <ButtonColors />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonColors",
        },
      ],
    },
    {
      title: "Size Hierarchy",
      description:
        "Demonstrates the different button sizes available, showing how they scale for various UI contexts and information hierarchy. Includes both standard text buttons and icon-only buttons.",
      blocks: [
        {
          title: "Default Sizes",
          description:
            "Buttons with text only, ideal for most actions in your UI. Sizes scale from extra small to large.",
          Preview: <ButtonDefaultSizes />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonDefaultSizes",
        },
        {
          title: "Icon Sizes",
          description:
            "Buttons that contain only icons — useful for compact toolbars or actions. Each size variant maintains consistent proportions.",
          Preview: <ButtonIconSizes />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonIconSizes",
        },
      ],
    },
    {
      title: "Shape Variants",
      description:
        "Customize the button shape to match your design language and brand identity.",
      blocks: [
        {
          Preview: <ButtonShapes />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonShapes",
        },
      ],
    },
    {
      title: "Icon Buttons",
      description: `This section demonstrates buttons with icons only and buttons with icon + text.`,
      blocks: [
        {
          title: "Icon + Text Buttons",
          description:
            "Buttons combining icons and text for clarity in actions that require a label alongside a visual cue.",
          Preview: <ButtonIconText />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonIconText",
        },
        {
          title: "Icon-only Buttons",
          description:
            "Buttons containing only an icon, ideal for compact action triggers such as toolbar buttons or quick actions.",
          Preview: <ButtonIconOnly />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonIconOnly",
        },
      ],
    },
    {
      title: "Interactive States",
      description:
        "Useful for understanding how buttons respond to user interactions in your UI.",
      blocks: [
        {
          title: "Disabled State",
          description: "Shows buttons that are disabled and not clickable.",
          Preview: <ButtonDisabled />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonVariants",
        },
        {
          title: "Loading State",
          description:
            "Displays buttons with a loading indicator to show ongoing processes.",
          Preview: <ButtonLoading />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonIcon",
        },
      ],
    },
    {
      title: "Composition",
      description:
        "Use the asChild prop to compose buttons with other elements while maintaining consistent styling and behavior.",
      blocks: [
        {
          Preview: <ButtonComposition />,
          codePath: "/common/button.showcase.tsx",
          componentName: "ButtonComposition",
        },
      ],
    },
  ],
  apis: [
    {
      title: "Button API",
      description:
        "The Button component extends the native `<button>` element, so you can pass any valid HTML button attributes (e.g. `onClick`, `type`, `disabled`, etc.).",
      api: [
        {
          prop: "variant",
          description: "Defines the visual style of the button.",
          types: variants.variant as string[],
          default: "solid",
        },
        {
          prop: "color",
          description: "Controls the theme color of the button.",
          types: variants.color as string[],
          default: "default",
        },
        {
          prop: "size",
          description:
            "Adjusts the button’s dimensions and padding to fit different UI contexts.",
          types: variants.size as string[],
          default: "md",
        },
        {
          prop: "shape",
          description:
            "Determines the button's corner style and border radius.",
          types: variants.shape as string[],
          default: "rounded",
        },
        {
          prop: "children",
          description:
            "Any content inside the button — typically text or icons (ReactNode).",
          types: ["React.ReactNode"],
          default: "—",
        },
        {
          prop: "loading",
          description:
            "Shows a loading spinner and prevents user interaction while active.",
          types: ["boolean"],
          default: "false",
        },
        {
          prop: "disabled",
          description: "Disables the button and prevents user interaction.",
          types: ["boolean"],
          default: "false",
        },
        {
          prop: "asChild",
          description:
            "If true, renders the button as a child element (e.g. a `Link` or `a` tag) while preserving styles.",
          types: ["boolean"],
          default: "false",
        },
        {
          prop: 'className',
          description: 'Custom Tailwind or CSS classes.',
          types: ['string'],
          default: '—',
        },
      ],
    },
  ],
};
