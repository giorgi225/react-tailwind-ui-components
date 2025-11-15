import {
  Heading,
  Li,
  Paragraph,
  Strong,
  Ul,
} from "@/components/ui/common/typography";

export default function Home() {
  return (
    <div className="w-full max-w-5xl mx-auto md:px-6 py-12 lg:py-16 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 px-2 md:px-0">
        <Heading level="h1" align="center">
          🧩 My Design Components
        </Heading>
        <Paragraph
          className="[&>strong]:text-foreground max-w-xl mx-auto"
          align="center"
          variant="muted"
        >
          A showcase of reusable, production-ready UI components — built with
          <Strong> Next.js 16</Strong>, <Strong>React 19</Strong>,{" "}
          <Strong>Shadcn</Strong> and
          <Strong> Tailwind CSS 4</Strong>. Clean, scalable, and
          developer-first.
        </Paragraph>
      </section>

      <section className="bg-card text-card-foreground border border-border p-6 space-y-4 rounded-2xl">
        <Heading level="h2">💡 Getting Started</Heading>

        <Paragraph variant="muted" leading="relaxed">
          Explore the sidebar to browse through the complete collection of
          components. Every element is designed with accessibility, reusability,
          and flexibility in mind.
        </Paragraph>

        <Ul className="text-muted-foreground mt-4">
          <Li prefix="✓" prefixClassName="text-success">
            Fully responsive and mobile-optimized
          </Li>
          <Li prefix="✓" prefixClassName="text-success">
            Built with Tailwind CSS for instant customization
          </Li>
          <Li prefix="✓" prefixClassName="text-success">
            TypeScript-powered for complete type safety
          </Li>
          <Li prefix="✓" prefixClassName="text-success">
            Modular and reusable — ideal for scalable projects
          </Li>
        </Ul>
      </section>

      {/* Next Steps Section */}
      <section className="bg-card text-card-foreground border border-border p-6 space-y-4 rounded-2xl">
        <Heading level="h2">🚀 Explore & Build</Heading>

        <Paragraph variant="muted" leading="relaxed">
          Dive deeper into each component to see live previews, props, and
          ready-to-use code snippets. Experiment, copy, or adapt them for your
          own projects.
        </Paragraph>

        <Ul className="text-muted-foreground mt-4">
          <Li prefix="✓" prefixClassName="text-success">
            Browse UI categories — Buttons, Forms, Layouts, and more
          </Li>
          <Li prefix="✓" prefixClassName="text-success">
            Inspect prop types and variations with live examples
          </Li>
          <Li prefix="✓" prefixClassName="text-success">
            Copy, adapt, and integrate components instantly
          </Li>
        </Ul>
      </section>

      {/* Footer Note */}
      <section className="text-card-foreground p-6 space-y-4 rounded-2xl text-center">
        <Paragraph variant="muted">
          📘 This project showcases my approach to building{" "}
          <Strong>scalable design systems</Strong>, maintaining{" "}
          <Strong>clean architecture</Strong>, and writing
          <Strong> high-quality TypeScript React code</Strong>.
        </Paragraph>
      </section>
    </div>
  );
}
