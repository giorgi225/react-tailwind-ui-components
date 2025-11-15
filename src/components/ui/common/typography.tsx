import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/style.utils";

export const headingVariants = cva("w-full tracking-tight", {
  variants: {
    level: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      danger: "text-danger",
      success: "text-success",
      warning: "text-warning",
      underlined: "border-b-2 border-border pb-2",
    },
    align: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
    },
  },
  defaultVariants: {
    level: "h1",
    variant: "default",
    align: "start",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", variant, align, children, ...props }, ref) => {
    const Comp = level ?? "h1";
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level, variant, align, className }))}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Heading.displayName = "Heading";

/* ------------------- Paragraph ------------------- */
export const paragraphVariants = cva("text-sm text-foreground", {
  variants: {
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    variant: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      danger: "text-danger",
      success: "text-success",
      warning: "text-warning",
      lead: "text-lg sm:text-xl md:text-2xl font-light text-muted-foreground",
      quote: "border-l-4 border-muted-foreground/30 pl-4 italic",
      code: "w-max bg-muted px-2 py-1 rounded text-sm",
    },
    align: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
      justify: "text-justify",
    },
    leading: {
      tight: "leading-tight",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    weight: "normal",
    variant: "default",
    align: "start",
    leading: "normal",
    truncate: false,
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

export const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      className,
      weight,
      variant,
      align,
      leading,
      truncate,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <p
        ref={ref}
        className={cn(
          paragraphVariants({
            weight,
            variant,
            align,
            leading,
            truncate,
            className,
          })
        )}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

/* ------------------- Inline Elements ------------------- */
export const Strong: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <strong className={cn("font-semibold", className)} {...props}>
    {children}
  </strong>
);

export const Em: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  children,
  ...props
}) => (
  <em className={cn("italic", className)} {...props}>
    {children}
  </em>
);

export const Code: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  className,
  children,
  ...props
}) => (
  <code
    className={cn("font-mono bg-muted px-1 py-0.5 rounded text-sm", className)}
    {...props}
  >
    {children}
  </code>
);

/* ------------------- List Elements ------------------- */
export const Ul: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ul className={cn("list-disc space-y-3", className)} {...props}>
      {children} {}
    </ul>
  );
};

export const Ol: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ol className={cn("list-decimal space-y-3", className)} {...props}>
      {children}
    </ol>
  );
};

export interface LiProps
  extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "prefix"> {
  prefix?: React.ReactNode;
  prefixClassName?: string;
  suffix?: React.ReactNode;
  suffixClassName?: string;
}

export const Li: React.FC<LiProps> = ({
  className,
  prefix,
  prefixClassName,
  suffix,
  suffixClassName,
  children,
  ...props
}) => {
  const hasAffix = prefix || suffix;

  return (
    <li
      className={cn(
        "text-sm",
        hasAffix ? "flex items-center gap-1.5" : "ml-4",
        className
      )}
      {...props}
    >
      {prefix && <div className={cn("", prefixClassName)}>{prefix}</div>}
      {children}
      {suffix && <div className={cn("", suffixClassName)}>{suffix}</div>}
    </li>
  );
};
