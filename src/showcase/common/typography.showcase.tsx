import {
  Code,
  Em,
  Heading,
  Li,
  Ol,
  Paragraph,
  Strong,
  Ul,
} from "@/components/ui/common/typography";
import { Heart } from "iconsax-reactjs";

export function Headings() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Heading level={`h1`}>Level 1</Heading>
      <Heading level={`h2`}>Level 2</Heading>
      <Heading level={`h3`}>Level 3</Heading>
      <Heading level={`h4`}>Level 4</Heading>
      <Heading level={`h5`}>Level 5</Heading>
      <Heading level={`h6`}>Level 6</Heading>
    </div>
  );
}

export function HeadingVariants() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Heading level={`h2`} variant={`default`}>
        Default
      </Heading>
      <Heading level={`h2`} variant={`muted`}>
        Muted
      </Heading>
      <Heading level={`h2`} variant={`primary`}>
        Primary
      </Heading>
      <Heading level={`h2`} variant={`danger`}>
        Danger
      </Heading>
      <Heading level={`h2`} variant={`success`}>
        Success
      </Heading>
      <Heading level={`h2`} variant={`warning`}>
        Warning
      </Heading>
      <Heading level={`h2`} variant={`underlined`}>
        Underlined
      </Heading>
    </div>
  );
}

export function HeadingAligment() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Heading level={`h2`} align={`start`}>
        Align Start
      </Heading>
      <Heading level={`h2`} align={`center`}>
        Align Center
      </Heading>
      <Heading level={`h2`} align={`end`}>
        Align End
      </Heading>
    </div>
  );
}

export function Paragraphs() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Paragraph variant={`default`}>
        The quick brown fox jumps over the lazy dog.
      </Paragraph>
      <Paragraph variant={`muted`}>
        Muted paragraph for secondary text.
      </Paragraph>
      <Paragraph variant={`primary`}>Primary color emphasis</Paragraph>
      <Paragraph variant={`danger`}>
        Important alert text styled as danger.
      </Paragraph>
      <Paragraph variant={`success`}>Success message example.</Paragraph>
      <Paragraph variant={`warning`}>
        Warning paragraph for cautionary notes.
      </Paragraph>
      <Paragraph variant={`lead`}>
        Lead paragraph for introductory text.
      </Paragraph>
      <Paragraph variant={`quote`}>
        {`"Typography is the craft of endowing human language with a durable
        visual form.” – Robert Bringhurst"`}
      </Paragraph>
      <Paragraph variant={`code`}>Inline Code Sample</Paragraph>
    </div>
  );
}

export function ParagraphAligment() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Paragraph align={`start`}>Aligned to start (default).</Paragraph>
      <Paragraph align={`center`}>Aligned to center for emphasis.</Paragraph>
      <Paragraph align={`end`}>Aligned to end for contrast.</Paragraph>
      <Paragraph align={`justify`}>
        Justified text ensures clean edges on both sides, enhancing readability
        for longer paragraphs.
      </Paragraph>
    </div>
  );
}

export function ParagraphLineHeights() {
  const longText =
    `lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry`.repeat(4);
  return (
    <div className="flex flex-col gap-4 p-5">
      <Paragraph leading={`tight`}>{longText}</Paragraph>
      <Paragraph leading={`normal`}>{longText}</Paragraph>
      <Paragraph leading={`relaxed`}>{longText}</Paragraph>
      <Paragraph leading={`loose`}>{longText}</Paragraph>
    </div>
  );
}

export function ParagraphTruncating() {
  const longText =
    `lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry`.repeat(20);

  return (
    <div className="flex flex-col gap-4 p-5">
      <Paragraph className="truncate">{longText}</Paragraph>
      <Paragraph className="line-clamp-2">{longText}</Paragraph>
      <Paragraph className="line-clamp-3">{longText}</Paragraph>
      <Paragraph className="line-clamp-4">{longText}</Paragraph>
      <Paragraph className="line-clamp-5">{longText}</Paragraph>
    </div>
  );
}

export function InlineElements() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Paragraph>
        Regular text with <Strong>strong emphasis</Strong>,{" "}
        <Em>italic emphasis</Em>, and <Code>inline code example</Code>.
      </Paragraph>
    </div>
  );
}

export function Lists() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <Ul>
        <Li>First item</Li>
        <Li>Second item</Li>
        <Li>Third item</Li>
      </Ul>

      <Ul>
        <Li prefix={<Heart className="size-4" />}>First item With Prefix</Li>
        <Li prefix={<Heart className="size-4" />}>Second item With Prefix</Li>
        <Li prefix={<Heart className="size-4" />}>Third item With Prefix</Li>
      </Ul>

      <Ol>
        <Li>First ordered</Li>
        <Li>Second ordered</Li>
        <Li>Third ordered</Li>
      </Ol>

      <Ol>
        <Li suffix={<Heart className="size-4" />}>First ordered With Suffix</Li>
        <Li suffix={<Heart className="size-4" />}>Second ordered With Suffix</Li>
        <Li suffix={<Heart className="size-4" />}>Third ordered With Suffix</Li>
      </Ol>
    </div>
  );
}
