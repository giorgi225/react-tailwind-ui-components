"use client";

import { Heading, Paragraph } from "@/components/ui/common/typography";
import { Stop } from "iconsax-reactjs";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col text-center m-auto p-6 space-y-6">
      <Stop className="size-12 text-danger" variant="Bold" />
      <Heading level="h1">Component Not Found</Heading>
      <Paragraph variant="muted">
        Oops! The component you are looking for does not exist.
      </Paragraph>
      <Link
        href="/"
        className="inline-block px-6 py-1 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
