import { cn } from "@/lib/style.utils";
import { ArrowDown2, Icon } from "iconsax-reactjs";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useCallback, useState } from "react";

export interface AsideLinkProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "children">,
    LinkProps {
  icon?: Icon;
  label: string;
  list?: AsideLinkProps[];
  level?: number;
  isComingSoon?: boolean;
}

function hasActiveChild(
  list: AsideLinkProps[] | undefined,
  pathname: string
): boolean {
  if (!list) return false;
  return list.some(
    (item) =>
      pathname === item.href ||
      pathname.startsWith(`${item.href}/`) ||
      hasActiveChild(item.list, pathname)
  );
}

function BulletIndicator({
  level,
  isActive,
}: {
  level: number;
  isActive: boolean;
}) {
  return (
    <div
      className="grid place-content-center size-5"
      style={{
        ...(level > 1 && {
          marginLeft: level * 12,
        }),
      }}
    >
      <span
        className={`${isActive ? "bg-primary" : "bg-foreground/10  group-hover:bg-foreground/40"} size-1.5 rounded-full transition-colors`}
      ></span>
    </div>
  );
}

export default function AsideLink({
  href,
  label,
  className,
  list,
  icon: Icon,
  level = 0,
  isComingSoon,
  ...props
}: AsideLinkProps) {
  const pathname = usePathname();
  const hasChildren = !!(list && list.length);

  const isActive =
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    hasActiveChild(list, pathname);

  const [isOpen, setIsOpen] = useState<boolean>(() => isActive && hasChildren);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (hasChildren) {
        e.preventDefault();
        setIsOpen((prevValue) => !prevValue);
      }
    },
    [hasChildren]
  );

  return (
    <div className="w-full flex flex-col">
      <Link
        href={href}
        onClick={handleClick}
        aria-expanded={hasChildren ? isOpen : undefined}
        className={cn(
          "group",
          "flex flex-1 items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-sm text-foreground bg-transparent", // Added responsive padding
          "transition-all",
          isOpen && level === 0 && "bg-foreground/5",
          isActive
            ? "text-primary bg-primary/5"
            : "hover:text-foreground hover:bg-foreground/5",
          isComingSoon && "pointer-events-none opacity-50!",
          className
        )}
        {...props}
      >
        {Icon && <Icon className="size-5 shrink-0" variant="Bulk" />}
        {level > 0 && <BulletIndicator level={level} isActive={isActive} />}

        <span
          className={`${level !== 0 ? "opacity-80" : ""} font-medium text-sm`}
        >
          {label}
        </span>

        {hasChildren && (
          <ArrowDown2
            className={`${
              isOpen && "rotate-180"
            } size-4 ml-auto transition-transform`}
          />
        )}
      </Link>

      {hasChildren && isOpen && (
        <div className="flex flex-col py-0.5 border-b border-border w-full">
          {list!.map((item) => (
            <AsideLink key={item.label} level={level + 1} {...item} />
          ))}
        </div>
      )}
    </div>
  );
}
