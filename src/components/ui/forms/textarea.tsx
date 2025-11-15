"use client";
import * as React from "react";
import { cn } from "@/lib/style.utils";
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  [
    "flex items-start w-full rounded-md bg-transparent",
    "text-sm font-medium transition-all outline-none",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "ring-primary/40 ring-offset-2",
    "resize-none",
  ],
  {
    variants: {
      size: {
        xs: "min-h-12 px-3 py-2 text-sm rounded-md",
        sm: "min-h-16 px-3 py-2 text-sm rounded-md",
        md: "min-h-20 px-3 py-2.5 text-sm rounded-md",
        lg: "min-h-24 px-4 py-2.5 text-sm rounded-lg",
      },
      variant: {
        bordered: "border border-input-border focus:ring-2",
        solid: "bg-input border border-transparent focus:ring-2",
        underlined:
          "!bg-transparent border-b border-border rounded-none focus:border-primary/40",
        faded: "bg-input border border-border focus:ring-2",
      },
      state: {
        default: "",
        error: "border-danger bg-danger/10 focus-visible:ring-danger/30",
        success: "border-success bg-success/10 focus-visible:ring-success/30",
        warning: "border-warning bg-warning/10 focus-visible:ring-warning/30",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "bordered",
      state: "default",
    },
  }
);

export interface TextareaProps
  extends Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "size" | "prefix"
    >,
    VariantProps<typeof textareaVariants> {
  autoResize?: boolean;
  prefix?: React.ReactNode;
  prefixClassName?: string;
  suffix?: React.ReactNode;
  suffixClassName?: string;
  onValueChange?: (value: string) => void;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      state,
      autoResize = false,
      size,
      prefix,
      prefixClassName,
      suffix,
      suffixClassName,
      onChange,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const prefixRef = React.useRef<HTMLSpanElement | null>(null);
    const suffixRef = React.useRef<HTMLSpanElement | null>(null);
    const [padding, setPadding] = React.useState({ left: 0, right: 0 });

    // Combine forwarded ref with internal ref
    React.useImperativeHandle(
      ref,
      () => textareaRef.current as HTMLTextAreaElement
    );

    // Auto-resize behavior
    React.useEffect(() => {
      if (!autoResize || !textareaRef.current) return;

      const el = textareaRef.current;
      const resize = () => {
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
      };

      resize();
      el.addEventListener("input", resize);
      return () => el.removeEventListener("input", resize);
    }, [autoResize]);

    React.useEffect(() => {
      const left = prefixRef.current?.offsetWidth ?? 0;
      const right = suffixRef.current?.offsetWidth ?? 0;
      setPadding({ left, right });
    }, [prefix, suffix]);

    // Handle value change with both onChange and onValueChange
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      onValueChange?.(e.target.value);
    };

    return (
      <div className="relative flex items-start w-full">
        {prefix && (
          <span
            ref={prefixRef}
            className={cn(
              "absolute left-3 top-3 text-sm flex items-start text-muted-foreground z-10",
              prefixClassName
            )}
          >
            {prefix}
          </span>
        )}

        <textarea
          ref={textareaRef}
          data-slot="textarea"
          className={cn(textareaVariants({ variant, size, state }), className)}
          style={{
            paddingLeft: prefix ? `${padding.left + 16}px` : undefined,
            paddingRight: suffix ? `${padding.right + 16}px` : undefined,
          }}
          onChange={handleChange}
          {...props}
        />

        {suffix && (
          <span
            ref={suffixRef}
            className={cn(
              "absolute right-3 top-3 text-sm flex items-start text-muted-foreground z-10",
              suffixClassName
            )}
          >
            {suffix}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
