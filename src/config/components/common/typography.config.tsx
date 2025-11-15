import { ComponentShowcaseType } from "../base.config";
import { VariantProps } from "class-variance-authority";
import {
  headingVariants,
  paragraphVariants,
} from "@/components/ui/common/typography";
import {
  HeadingAligment,
  Headings,
  HeadingVariants,
  InlineElements,
  Lists,
  ParagraphAligment,
  ParagraphLineHeights,
  Paragraphs,
  ParagraphTruncating,
} from "@/showcase/common/typography.showcase";

type HeadingVariants = VariantProps<typeof headingVariants>;
type ParagraphVariants = VariantProps<typeof paragraphVariants>;

const headingV: {
  [K in keyof HeadingVariants]: HeadingVariants[K] extends boolean
    ? boolean[]
    : NonNullable<HeadingVariants[K]>[];
} = {
  level: ["h1", "h2", "h3", "h4", "h5", "h6"],
  variant: [
    "default",
    "muted",
    "primary",
    "danger",
    "success",
    "warning",
    "underlined",
  ],
  align: ["start", "center", "end"],
};

const paragraphV: {
  [K in keyof ParagraphVariants]: ParagraphVariants[K] extends boolean
    ? boolean[]
    : NonNullable<ParagraphVariants[K]>[];
} = {
  weight: ["light", "normal", "medium", "semibold", "bold", "extrabold"],
  variant: [
    "default",
    "muted",
    "primary",
    "danger",
    "success",
    "warning",
    "lead",
    "quote",
    "code",
  ],
  align: ["start", "center", "end", "justify"],
  leading: ["tight", "normal", "relaxed", "loose"],
  truncate: [true, false],
};

export const typographyConfig: ComponentShowcaseType = {
  title: "Typography",
  description:
    "Comprehensive showcase of responsive, accessible, and semantic typography components designed for consistent visual hierarchy and readability.",
  examples: [
    {
      title: "Headings",
      description: "",
      blocks: [
        {
          title: "Heading Levels",
          description: "Visual hierarchy from H1 to H6 for scalable titles.",
          Preview: <Headings />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "Headings",
        },
        {
          title: "Heading Variants",
          description:
            "Demonstrates color and style variants such as muted, primary, gradient, and decorative headings.",
          Preview: <HeadingVariants />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "HeadingVariants",
        },
        {
          title: "Heading Alignment",
          description:
            "Text alignment for headings—left, center, and right—for flexible layout control.",
          Preview: <HeadingAligment />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "HeadingAligment",
        },
      ],
    },

    {
      title: "Paragraphs",
      description:
        "Demonstrates typography hierarchy, weight, color variants, and text behavior for body copy.",
      blocks: [
        {
          title: "Paragraph Variants",
          description:
            "Various text styles for emphasis, quotes, and inline code.",
          Preview: <Paragraphs />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "Paragraphs",
        },
        {
          title: "Paragraph Alignment",
          description: "Different alignment options for diverse layout needs.",
          Preview: <ParagraphAligment />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "ParagraphAligment",
        },
        {
          title: "Line Heights (Leading)",
          description: "Explores text readability through line-height control.",
          Preview: <ParagraphLineHeights />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "ParagraphLineHeights",
        },
        {
          title: "Truncation & Clamping",
          description:
            "Demonstrates text truncation with Tailwind’s line-clamp utilities.",
          Preview: <ParagraphTruncating />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "ParagraphTruncating",
        },
      ],
    },

    {
      title: "Inline Elements",
      description:
        "Illustrates inline semantic elements such as <strong>, <em>, and <code> within text blocks.",
      blocks: [
        {
          Preview: <InlineElements />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "InlineElements",
        },
        {
          title: "Lists",
          description:
            "Demonstrates ordered and unordered lists with consistent indentation and spacing.",
          Preview: <Lists />,
          codePath: "/common/typography.showcase.tsx",
          componentName: "Lists",
        },
      ],
    },
  ],
  apis: [
    {
      title: 'Heading Api',
      api: [
        {
          prop: 'level',
          description: 'Defines the semantic heading level and visual size.',
          types: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          default: `"h1"`,
        },
        {
          prop: 'variant',
          description: 'Controls color and style variations of the heading.',
          types: [
            'default',
            'muted',
            'primary',
            'danger',
            'success',
            'warning',
            'underlined',
          ],
          default: `"default"`,
        },
        {
          prop: 'align',
          description: 'Text alignment of the heading content.',
          types: ['start', 'center', 'end'],
          default: `"start"`,
        },
        {
          prop: 'className',
          description: 'Additional Tailwind or custom class names for styling.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Content to be rendered inside the heading element.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Paragraph -------------------- */
    {
      title: 'Paragraph Api',
      api: [
        {
          prop: 'weight',
          description: 'Sets the font weight of the paragraph text.',
          types: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
          default: `"normal"`,
        },
        {
          prop: 'variant',
          description: 'Controls the visual style or context of the paragraph.',
          types: [
            'default',
            'muted',
            'primary',
            'danger',
            'success',
            'warning',
            'lead',
            'quote',
            'code',
          ],
          default: `"default"`,
        },
        {
          prop: 'align',
          description: 'Text alignment within the paragraph.',
          types: ['start', 'center', 'end', 'justify'],
          default: `"start"`,
        },
        {
          prop: 'leading',
          description: 'Controls line height (vertical spacing between lines).',
          types: ['tight', 'normal', 'relaxed', 'loose'],
          default: `"normal"`,
        },
        {
          prop: 'truncate',
          description:
            'If true, truncates overflowing text with an ellipsis (`...`).',
          types: ['boolean'],
          default: 'false',
        },
        {
          prop: 'className',
          description: 'Additional Tailwind or custom class names for styling.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Paragraph text or React nodes to render inside.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Strong -------------------- */
    {
      title: 'Strong Api',
      api: [
        {
          prop: 'className',
          description: 'Custom Tailwind or CSS classes for bold text.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Content to be emphasized in bold.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Em -------------------- */
    {
      title: 'Em Api',
      api: [
        {
          prop: 'className',
          description: 'Custom Tailwind or CSS classes for italic text.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Italicized text or inline content.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Code -------------------- */
    {
      title: 'Code Api',
      api: [
        {
          prop: 'className',
          description:
            'Additional Tailwind or custom class names for inline code styling.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Inline code content to render in monospace font.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Ul -------------------- */
    {
      title: 'Ul Api',
      api: [
        {
          prop: 'className',
          description:
            'Additional Tailwind or CSS classes for the unordered list.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'List items to render inside (`<Li>` components).',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Ol -------------------- */
    {
      title: 'Ol Api',
      api: [
        {
          prop: 'className',
          description:
            'Additional Tailwind or CSS classes for the ordered list.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'List items to render inside (`<Li>` components).',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },

    /* -------------------- Li -------------------- */
    {
      title: 'Li Api',
      api: [
        {
          prop: 'prefix',
          description:
            'Optional leading element (e.g., icon or bullet) displayed before the list item text.',
          types: ['React.ReactNode'],
          default: '—',
        },
        {
          prop: 'prefixClassName',
          description: 'Custom class names for the prefix wrapper.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'suffix',
          description:
            'Optional trailing element (e.g., badge or icon) displayed after the list item text.',
          types: ['React.ReactNode'],
          default: '—',
        },
        {
          prop: 'suffixClassName',
          description: 'Custom class names for the suffix wrapper.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'className',
          description: 'Custom Tailwind or CSS classes for the list item.',
          types: ['string'],
          default: '—',
        },
        {
          prop: 'children',
          description: 'Main content or text for the list item.',
          types: ['React.ReactNode'],
          default: '—',
        },
      ],
    },
  ],
};
