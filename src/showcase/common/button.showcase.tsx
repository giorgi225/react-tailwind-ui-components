"use client";
import { Button, buttonVariants } from "@/components/ui/common/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VariantProps } from "class-variance-authority";
import {
  ArrowRight,
  DocumentDownload,
  Edit2,
  Heart,
  Like1,
  Setting2,
  Star1,
  User,
} from "iconsax-reactjs";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

console.log("Main Button showcase");

const variants: VariantProps<typeof buttonVariants>["variant"][] = [
  "solid",
  "outline",
  "ghost",
  "flat",
  "link",
];

const colors: VariantProps<typeof buttonVariants>["color"][] = [
  "default",
  "primary",
  "secondary",
  "danger",
  "success",
  "warning",
  "info",
];

// variants
export function ButtonVariants() {
  console.log("variants");
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button variant={`solid`}>Solid</Button>
      <Button variant={`outline`}>Outline</Button>
      <Button variant={`ghost`}>Ghost</Button>
      <Button variant={`flat`}>Flat</Button>
      <Button variant={`link`}>Link</Button>
    </div>
  );
}

// colors
export function ButtonColors() {
  console.log("colors");
  const [variant, setVariant] = useState<string>("solid");

  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Tabs value={variant} onValueChange={setVariant} className="flex-1">
        <TabsList className="w-full grid grid-cols-5">
          {variants.map((variant) => (
            <TabsTrigger
              key={variant}
              value={variant as string}
              className="capitalize"
            >
              {variant}
            </TabsTrigger>
          ))}
        </TabsList>

        {variants.map((variant) => (
          <TabsContent key={variant} value={variant as string}>
            <div className="flex flex-wrap gap-5 mt-3">
              {colors?.map((color) => (
                <Button key={color} variant={variant} color={color}>
                  {color}
                </Button>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

// sizes
export function ButtonDefaultSizes() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button size={`xs`}>Extra small</Button>
      <Button size={`sm`}>Small</Button>
      <Button size={`md`}>Medium</Button>
      <Button size={`lg`}>Large</Button>
    </div>
  );
}
export function ButtonIconSizes() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button size={`xs_icon`}>
        <Heart variant="Bold" />
      </Button>
      <Button size={`sm_icon`}>
        <Like1 variant="Bold" />
      </Button>
      <Button size={`md_icon`}>
        <User variant="Bold" />
      </Button>
      <Button size={`lg_icon`}>
        <Star1 variant="Bold" />
      </Button>
    </div>
  );
}

// shapes
export function ButtonShapes() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button size={`md`} shape={`rounded`}>
        Rounded
      </Button>
      <Button size={`md`} shape={`square`}>
        Square
      </Button>
      <Button size={`md`} shape={`circle`}>
        Circle
      </Button>
    </div>
  );
}

export function ButtonIconText() {
  const [loading, setLoading] = useState<boolean>(false);

  const onDownload = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button variant={`flat`}>
        <Edit2 variant="Outline" />
        Edit
      </Button>

      <Button variant={`flat`}>
        Settings
        <Setting2 variant="Outline" />
      </Button>

      <Button
        onClick={onDownload}
        variant={`flat`}
        color={`info`}
        loading={loading}
      >
        <DocumentDownload variant="Outline" />
        With Loading (Click to trigger)
      </Button>
    </div>
  );
}

export function ButtonIconOnly() {
  const [loading, setLoading] = useState<boolean>(false);

  const onDownload = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button variant={`flat`} size={`md_icon`}>
        <Edit2 variant="Outline" />
      </Button>

      <Button variant={`flat`} size={`md_icon`}>
        <Setting2 variant="Outline" />
      </Button>

      <Button
        onClick={onDownload}
        variant={`flat`}
        color={`info`}
        loading={loading}
        size={`md_icon`}
      >
        <DocumentDownload variant="Outline" />
      </Button>
    </div>
  );
}

export function ButtonDisabled() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button disabled variant={`solid`}>
        Solid
      </Button>
      <Button disabled variant={`outline`}>
        Outline
      </Button>
      <Button disabled variant={`ghost`}>
        Ghost
      </Button>
      <Button disabled variant={`flat`}>
        Flat
      </Button>
      <Button disabled variant={`link`}>
        Link
      </Button>
    </div>
  );
}
export function ButtonLoading() {
  const [loading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button loading>Loading</Button>
      <Button size="md_icon" variant={"flat"} loading>
        Loading
      </Button>
      <Button onClick={onClick} color="primary" loading={loading}>
        Click Me
      </Button>
    </div>
  );
}

export function ButtonCustomColor() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button className="bg-orange-500 hover:bg-orange-400 active:scale-95">
        Custom Color
      </Button>
    </div>
  );
}

export function ButtonComposition() {
  return (
    <div className="w-full flex flex-wrap gap-5 p-5 items-center">
      <Button asChild>
        <Link href={`/`}>
          View Link
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
}
