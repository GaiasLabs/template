"use client";

import { cn } from "@/lib/utils";
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

export function PwaSafeAreaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [hasTopNavbar, setHasTopNavbar] = useState(false);
  const [hasBottomNavbar, setHasBottomNavbar] = useState(false);

  useEffect(() => {
    setHasTopNavbar(false);
    setHasBottomNavbar(false);
  }, [pathname]);

  const state = {
    hasTopNavbar,
    setHasTopNavbar,
    hasBottomNavbar,
    setHasBottomNavbar,
  };

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

export function useSafeArea() {
  const context = useContext(SafeAreaContext);
  if (!context) {
    throw new Error("useSafeArea must be used within a PwaSafeAreaProvider");
  }
  return context;
}
