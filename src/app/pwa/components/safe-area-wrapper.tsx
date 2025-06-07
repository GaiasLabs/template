"use client";

import { PwaBottomNavbar } from "@/app/pwa/components/bottom-navbar";
import { PwaTopNavbar } from "@/app/pwa/components/top-navbar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Path = `/${string}`;

export const routes = [
  "/pwa",
  "/pwa/about",
  "/pwa/profile",
  "/pwa/settings",
] as const satisfies Path[];

export type Routes = (typeof routes)[number];

const pathsWithTopNavbar: Routes[] = ["/pwa", "/pwa/about"] as const;
const pathsWithBottomNavbar: Routes[] = ["/pwa", "/pwa/settings"] as const;

export function PwaSafeAreaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() as Routes;

  let hasTopNavbar = false;
  let hasBottomNavbar = false;

  if (typeof pathname === "string") {
    hasTopNavbar = pathsWithTopNavbar.includes(pathname);
    hasBottomNavbar = pathsWithBottomNavbar.includes(pathname);
  }

  return (
    <>
      <div className="bg-background h-t-inset pointer-events-none fixed top-0 right-0 left-0 z-99999" />
      <div className="bg-background h-b-inset pointer-events-none fixed right-0 bottom-0 left-0 z-99999" />
      <div
        className={cn(
          "px-safe",
          // safe area insets
          "mr-r-inset ml-l-inset",
          hasBottomNavbar === true ? "mb-b-inset-b-nav" : "mb-b-inset",
          hasTopNavbar === true ? "mt-t-inset-t-nav" : "mt-t-inset",
          // main content height
          hasBottomNavbar === false
            ? hasTopNavbar === false
              ? "min-h-content-inset"
              : "min-h-content-inset-t-nav"
            : hasTopNavbar === false
              ? "min-h-content-inset-b-nav"
              : "min-h-content-inset-t-nav-b-nav",
        )}
      >
        <PwaTopNavbar display={hasTopNavbar} />
        <div className="max-w-global mx-auto">{children}</div>
        <PwaBottomNavbar display={hasBottomNavbar} />
      </div>
    </>
  );
}
