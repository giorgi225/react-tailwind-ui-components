import "./globals.css";
import Aside from "@/components/layout/aside/aside";
import MobileHeader from "@/components/layout/header/mobile-header";
import { Sen } from "next/font/google";

const mainFont = Sen({
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} bg-background text-foreground antialiased overflow-hidden`}
      >
        <div className="flex flex-col h-svh p-2">
          <MobileHeader />
          <div className="flex flex-1 h-full gap-2">
            <Aside />
            <div className="relative grid h-full flex-1 bg-neutral p-4 lg:p-6 border border-border rounded-lg scroll-container overflow-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
