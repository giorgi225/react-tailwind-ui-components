"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/style.utils";
import { Slot } from "@radix-ui/react-slot";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-md whitespace-nowrap text-sm font-medium transition-all cursor-n [&_svg]:pointer-events-none  shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer [&_svg]:size-4",
  {
    variants: {
      variant: {
        solid: "",
        outline: "border bg-transparent",
        ghost: "bg-transparent border-transparent",
        flat: "",
        link: "underline-offset-4 hover:underline p-0 h-auto",
      },
      color: {
        default: "",
        primary: "",
        secondary: "",
        danger: "",
        success: "",
        warning: "",
        info: "",
      },
      size: {
        // Text buttons
        xs: "min-w-20 px-2.5 py-1 h-8 text-xs gap-1.5 rounded-md",
        sm: "min-w-22 px-3 py-1.5 h-10 text-sm gap-1.5 rounded-md",
        md: "min-w-24 px-4 py-2 h-12 text-sm gap-2.5 rounded-lg",
        lg: "min-w-28 px-5 py-3 h-14 text-sm gap-2.5 rounded-lg [&_svg]:size-5",
        // Icon-only buttons
        xs_icon: "w-8 h-8 px-1 py-1 [&_svg]:size-3.5 rounded-md",
        sm_icon:
          "w-10 h-10 px-1.5 py-1.5 [&_svg]:w-5 [&_svg]:size-4 rounded-md",
        md_icon: "w-12 h-12 px-2 py-2 [&_svg]:w-5 [&_svg]:size-4.5 rounded-lg",
        lg_icon: "w-14 h-14 px-3 py-3 [&_svg]:w-6 [&_svg]:size-5 rounded-lg",
      },
      shape: {
        rounded: "",
        square: "rounded-none",
        circle: "rounded-full",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
      loading: {
        true: "pointer-events-none [&_svg:not(.button-loader)]:absolute [&_svg:not(.button-loader)]:opacity-0",
        false: "",
      },
    },
    compoundVariants: [
      /* SOLID */
      {
        variant: "solid",
        color: "default",
        class: "bg-foreground text-background hover:bg-foreground/90",
      },
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "solid",
        color: "secondary",
        class: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "solid",
        color: "danger",
        class: "bg-danger text-danger-foreground hover:bg-danger/90",
      },
      {
        variant: "solid",
        color: "success",
        class: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "solid",
        color: "warning",
        class: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "solid",
        color: "info",
        class: "bg-info text-info-foreground hover:bg-info/90",
      },

      /* OUTLINE */
      {
        variant: "outline",
        color: "default",
        class: "border-foreground/30 text-foreground hover:border-foreground",
      },
      {
        variant: "outline",
        color: "primary",
        class: "border-primary/30 text-primary hover:border-primary",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "border-secondary/30 text-secondary hover:border-secondary",
      },
      {
        variant: "outline",
        color: "danger",
        class: "border-danger/30 text-danger hover:border-danger",
      },
      {
        variant: "outline",
        color: "success",
        class: "border-success/30 text-success hover:border-success",
      },
      {
        variant: "outline",
        color: "warning",
        class: "border-warning/30 text-warning hover:border-warning",
      },
      {
        variant: "outline",
        color: "info",
        class: "border-info/30 text-info hover:border-info",
      },

      /* GHOST */
      {
        variant: "ghost",
        color: "default",
        class: "text-foreground hover:bg-foreground/10",
      },
      {
        variant: "ghost",
        color: "primary",
        class: "text-primary hover:bg-primary/10",
      },
      {
        variant: "ghost",
        color: "secondary",
        class: "text-secondary hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        color: "danger",
        class: "text-danger hover:bg-danger/10",
      },
      {
        variant: "ghost",
        color: "success",
        class: "text-success hover:bg-success/10",
      },
      {
        variant: "ghost",
        color: "warning",
        class: "text-warning hover:bg-warning/10",
      },
      { variant: "ghost", color: "info", class: "text-info hover:bg-info/10" },

      /* FLAT */
      {
        variant: "flat",
        color: "default",
        class: "bg-foreground/10 text-foreground hover:bg-foreground/20",
      },
      {
        variant: "flat",
        color: "primary",
        class: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      {
        variant: "flat",
        color: "secondary",
        class: "bg-secondary/10 text-secondary hover:bg-secondary/20",
      },
      {
        variant: "flat",
        color: "danger",
        class: "bg-danger/10 text-danger hover:bg-danger/20",
      },
      {
        variant: "flat",
        color: "success",
        class: "bg-success/10 text-success hover:bg-success/20",
      },
      {
        variant: "flat",
        color: "warning",
        class: "bg-warning/10 text-warning hover:bg-warning/20",
      },
      {
        variant: "flat",
        color: "info",
        class: "bg-info/10 text-info hover:bg-info/20",
      },

      /* LINK */
      {
        variant: "link",
        color: "default",
        class: "text-foreground hover:text-foreground/80",
      },
      {
        variant: "link",
        color: "primary",
        class: "text-primary hover:text-primary/80",
      },
      {
        variant: "link",
        color: "secondary",
        class: "text-secondary hover:text-secondary/80",
      },
      {
        variant: "link",
        color: "danger",
        class: "text-danger hover:text-danger/80",
      },
      {
        variant: "link",
        color: "success",
        class: "text-success hover:text-success/80",
      },
      {
        variant: "link",
        color: "warning",
        class: "text-warning hover:text-warning/80",
      },
      { variant: "link", color: "info", class: "text-info hover:text-info/80" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
      disabled: false,
      loading: false,
    },
  }
);

export interface ButtonProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      "color" | "disabled"
    >, // 🧠 omit native color prop
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

export function Button({
  className,
  variant,
  color,
  size,
  shape,
  loading = false,
  disabled = false,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const isIconSize = size?.endsWith("_icon");

  if (asChild) {
    return (
      <Comp
        type={props.type || "button"}
        data-slot="button"
        className={cn(
          buttonVariants({
            variant,
            color,
            size,
            shape,
            disabled,
            loading,
            className,
          })
        )}
        disabled={disabled}
        aria-disabled={disabled}
        aria-busy={loading ?? false}
        {...props}
      />
    );
  }

  return (
    <Comp
      type={props.type || "button"}
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          color,
          size,
          shape,
          disabled,
          loading,
          className,
        })
      )}
      disabled={disabled}
      aria-disabled={disabled}
      aria-busy={loading ?? false}
      {...props}
    >
      {loading && <Loader className="button-loader animate-spin" />}
      {(!loading || !isIconSize) && props.children}
    </Comp>
  );
}

export { buttonVariants };
