"use client";
import * as React from "react";
import { cn } from "@/lib/style.utils";
import { cva, type VariantProps } from "class-variance-authority";
import numeral from "numeral";

const inputVariants = cva(
  [
    "flex w-full rounded-md bg-transparent",
    "text-sm font-medium transition-all outline-none",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "ring-primary/40 ring-offset-2",
  ],
  {
    variants: {
      size: {
        xs: "h-9 px-3 py-1 text-sm rounded-md",
        sm: "h-10 px-3 py-1 text-sm rounded-md",
        md: "h-11 px-3 py-2 text-sm rounded-md",
        lg: "h-12 px-4 py-2 text-sm rounded-lg",
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">,
    VariantProps<typeof inputVariants> {
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "amount";
  prefix?: React.ReactNode;
  prefixClassName?: string;
  suffix?: React.ReactNode;
  suffixClassName?: string;
  onValueChange?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      size,
      variant,
      state,
      prefix,
      suffix,
      prefixClassName = "",
      suffixClassName = "",
      value,
      defaultValue,
      onChange,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const prefixRef = React.useRef<HTMLSpanElement | null>(null);
    const suffixRef = React.useRef<HTMLSpanElement | null>(null);
    const [padding, setPadding] = React.useState({ left: 0, right: 0 });

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<string>(() =>
      defaultValue != null ? String(defaultValue) : ""
    );
    const displayValue =
      type === "amount"
        ? numeral(isControlled ? value : internalValue).format("0,0.[00]")
        : isControlled
          ? value
          : internalValue;

    React.useEffect(() => {
      const left = prefixRef.current?.offsetWidth ?? 0;
      const right = suffixRef.current?.offsetWidth ?? 0;
      setPadding({ left, right });
    }, [prefix, suffix]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const rawValue = e.target.value;

      if (type === "amount") {
        const numeric = rawValue.replace(/[^0-9.,]/g, "");
        let numericClean = numeric.replace(/,/g, "");

        // Remove leading zeros → "01" becomes "1"
        if (numericClean !== "") {
          numericClean = String(Number(numericClean));
        }

        if (!isControlled) setInternalValue(numericClean);

        onChange?.({ ...e, target: { ...e.target, value: numericClean } });
        onValueChange?.(numericClean);
      } else {
        if (!isControlled) setInternalValue(rawValue);
        onChange?.(e);
        onValueChange?.(rawValue);
      }
    };

    return (
      <div className="relative flex items-center w-full">
        {prefix && (
          <span
            ref={prefixRef}
            className={cn(
              "absolute left-3 flex items-center justify-center text-muted-foreground",
              prefixClassName
            )}
          >
            {prefix}
          </span>
        )}

        <input
          ref={ref}
          type={type === "amount" ? "text" : type}
          data-slot="input"
          className={cn(inputVariants({ size, variant, state }), className)}
          style={{
            paddingLeft: prefix ? `${padding.left + 20}px` : undefined,
            paddingRight: suffix ? `${padding.right + 20}px` : undefined,
          }}
          value={displayValue}
          onChange={handleChange}
          {...props}
        />

        {suffix && (
          <span
            ref={suffixRef}
            className={cn(
              "absolute right-3 flex items-center justify-center text-muted-foreground",
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

Input.displayName = "Input";

export { Input, inputVariants };
