"use client";

import { Menu, SidebarLeft, SidebarRight } from "iconsax-reactjs";
import Brand from "@/components/common/brand";
import { useSidebarStore } from "@/store/layout.store";

export default function MobileHeader() {
  const { toggleMobile, toggleDesktop, isMobileOpen, isDesktopOpen } =
    useSidebarStore();

  return (
    <div className="sticky top-2 lg:hidden flex items-center justify-between p-4 bg-neutral border border-border rounded-lg mb-2 z-50">
      <Brand />
      <button
        onClick={toggleDesktop}
        className="hidden lg:flex p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        aria-label="Toggle menu"
      >
        {isDesktopOpen ? (
          <SidebarLeft variant={`Bold`} className="size-6" />
        ) : (
          <SidebarRight variant={`Bold`} className="size-6" />
        )}
      </button>
      <button
        onClick={toggleMobile}
        className="lg:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? (
          <SidebarLeft variant={`Bold`} className="size-6" />
        ) : (
          <SidebarRight variant={`Bold`} className="size-6" />
        )}
      </button>
    </div>
  );
}
