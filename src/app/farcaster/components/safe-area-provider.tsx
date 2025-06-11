"use client";

import { cn } from "@/lib/utils";
import { useFarcaster } from "@/providers/farcaster-provider";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type SafeAreaContext =
  | {
      hasTopNavbar: boolean;
      setHasTopNavbar: (hasTopNavbar: boolean) => void;

      hasBottomNavbar: boolean;
      setHasBottomNavbar: (hasBottomNavbar: boolean) => void;
    }
  | undefined;

const SafeAreaContext = createContext<SafeAreaContext>(undefined);

export function SafeAreaProvider({ children }: { children: React.ReactNode }) {
  const { farcaster } = useFarcaster();
  const pathname = usePathname();
  const [hasTopNavbar, setHasTopNavbar] = useState(false);
  const [hasBottomNavbar, setHasBottomNavbar] = useState(false);

  useEffect(() => {
    setHasTopNavbar(false);
    setHasBottomNavbar(false);
  }, [pathname]);

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  const state = {
    hasTopNavbar,
    setHasTopNavbar,
    hasBottomNavbar,
    setHasBottomNavbar,
  };

  if (typeof safeAreaInsets !== "undefined") {
    const verticalSafeAreaInsets = `${safeAreaInsets.top}px + ${safeAreaInsets.bottom}px`;

    return (
      <SafeAreaContext.Provider value={state}>
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
          <div className="max-w-global mx-auto">{children}</div>
        </div>
      </SafeAreaContext.Provider>
    );
  }

  // PWA fallback for when Farcaster SDK is not available
  return (
    <SafeAreaContext.Provider value={state}>
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
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </SafeAreaContext.Provider>
  );
}

export function useSafeArea({
  nav,
  height,
}: {
  nav: "top" | "bottom";
  height?: string;
}) {
  const context = useContext(SafeAreaContext);
  if (!context) {
    throw new Error("useSafeArea must be used within a PwaSafeAreaProvider");
  }

  const { setHasBottomNavbar, setHasTopNavbar } = context;

  useEffect(() => {
    if (nav === "top") {
      setHasTopNavbar(true);

      if (typeof height === "string") {
        document.documentElement.style.setProperty("--t-nav", height);
      }
    }
    if (nav === "bottom") {
      setHasBottomNavbar(true);

      if (typeof height === "string") {
        document.documentElement.style.setProperty("--b-nav", height);
      }
    }
  }, [height, nav, setHasBottomNavbar, setHasTopNavbar]);

  return context;
}
