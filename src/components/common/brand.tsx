import { cn } from "@/lib/style.utils";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface Props extends Omit<ImageProps, "src" | "alt"> {
  href?: string;
  linkClassName?: string;
}

export default function Brand({
  href,
  className,
  linkClassName,
  ...props
}: Props) {
  return (
    <Link
      href={`/`}
      className={cn("flex w-max items-center gap-3", linkClassName)}
    >
      <Image
        src={`/logo.svg`}
        alt={`Logo`}
        width={50}
        height={50}
        className={cn("w-full max-w-8", className)}
        {...props}
      />
      <span className="font-semibold text-lg">Shalamberidze</span>
    </Link>
  );
}
