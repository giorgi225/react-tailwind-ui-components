"use client";

import { cn } from "@/lib/style.utils";
import Brand from "@/components/common/brand";
import AsideLink from "./asideLink";
import { asideNavConfig } from "@/config/nav.config";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSidebarStore } from "@/store/layout.store";

type Props = Omit<React.HTMLAttributes<HTMLElement>, "children">;

export default function Aside({ className, ...props }: Props) {
  const { isMobileOpen, isDesktopOpen, closeMobile } = useSidebarStore();
  const pathname = usePathname();

  // Close mobile sidebar when route changes
  useEffect(() => {
    closeMobile();
  }, [pathname, closeMobile]);

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "flex flex-col w-full max-w-[260px] lg:bg-transparent bg-neutral rounded-lg",
          "fixed lg:relative z-50 lg:z-auto",
          "transition-all duration-300 ease-in-out",
          "h-[90svh] lg:h-auto",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          !isDesktopOpen && "lg:max-w-0 lg:opacity-0 lg:overflow-hidden",
          className
        )}
        aria-label="Sidebar Navigation"
        {...props}
      >
        {/* Desktop Brand - hidden on mobile since we have mobile header */}
        <div className="hidden lg:block">
          <Brand linkClassName="w-full p-4" />
        </div>

        <nav className="relative flex flex-col py-1 gap-0.5 flex-1 items-start px-2 scroll-container overflow-auto">
          {asideNavConfig.map((navItem, i) => (
            <AsideLink key={i} {...navItem} />
          ))}
        </nav>
      </aside>

      {/* Desktop Toggle Button */}
    </>
  );
}
