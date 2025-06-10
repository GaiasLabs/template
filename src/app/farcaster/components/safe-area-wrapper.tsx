"use client";

import { BottomNavbar } from "@/app/farcaster/components/bottom-navbar";
import { TopNavbar } from "@/app/farcaster/components/top-navbar";
import { cn } from "@/lib/utils";
import { useFarcaster } from "@/providers/farcaster-provider";
import { usePathname } from "next/navigation";

type Path = `/${string}`;

export const routes = [
  "/farcaster",
  "/farcaster/about",
  "/farcaster/profile",
  "/farcaster/settings",
] as const satisfies Path[];

export type Routes = (typeof routes)[number];

const pathsWithTopNavbar: Routes[] = [
  "/farcaster",
  "/farcaster/about",
] as const;
const pathsWithBottomNavbar: Routes[] = [
  "/farcaster",
  "/farcaster/settings",
] as const;

export function FarcasterSafeAreaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() as Routes;
  const { farcaster } = useFarcaster();

  let hasTopNavbar = false;
  let hasBottomNavbar = false;

  if (typeof pathname === "string") {
    hasTopNavbar = pathsWithTopNavbar.includes(pathname);
    hasBottomNavbar = pathsWithBottomNavbar.includes(pathname);
  }

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  if (typeof safeAreaInsets !== "undefined") {
    const verticalSafeAreaInsets = `${safeAreaInsets.top}px + ${safeAreaInsets.bottom}px`;

    return (
      <>
        <div
          className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999"
          style={{ height: `${safeAreaInsets.top}px` }}
        />
        <div
          className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999"
          style={{ height: `${safeAreaInsets.bottom}px` }}
        />
        <div
          className="px-safe"
          style={{
            marginRight: `${safeAreaInsets.right}px`,
            marginLeft: `${safeAreaInsets.left}px`,
            marginBottom:
              hasBottomNavbar === false
                ? `${safeAreaInsets.bottom}px`
                : `calc(${safeAreaInsets.bottom}px + var(--b-nav))`,
            marginTop:
              hasTopNavbar === false
                ? `${safeAreaInsets.top}px`
                : `calc(${safeAreaInsets.top}px + var(--t-nav))`,
            minHeight:
              hasBottomNavbar === false
                ? hasTopNavbar === false
                  ? `calc(100dvh - (${verticalSafeAreaInsets}))`
                  : `calc(100dvh - (${verticalSafeAreaInsets} + var(--t-nav)))`
                : hasTopNavbar === false
                  ? `calc(100dvh - (${verticalSafeAreaInsets} + var(--b-nav)))`
                  : `calc(100dvh - (${verticalSafeAreaInsets} + var(--t-nav) + var(--b-nav)))`,
          }}
        >
          {hasTopNavbar && <TopNavbar />}
          <div className="max-w-global mx-auto">{children}</div>
          {hasBottomNavbar && <BottomNavbar />}
        </div>
      </>
    );
  }

  // PWA fallback for when Farcaster SDK is not available
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
        {hasTopNavbar && <TopNavbar />}
        <div className="max-w-global mx-auto">{children}</div>
        {hasBottomNavbar && <BottomNavbar />}
      </div>
    </>
  );
}
