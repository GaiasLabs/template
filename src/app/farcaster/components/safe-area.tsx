"use client";

import { useFarcaster } from "@/providers/farcaster-provider";
import { useEffect, useState } from "react";

function setProperties(data: [string, string][]) {
  if (typeof window !== "undefined") {
    data.forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }
}

export function SafeArea({
  children,
  topNavHeight = "0px",
  bottomNavHeight = "0px",
}: {
  children: React.ReactNode;
  topNavHeight?: string;
  bottomNavHeight?: string;
}) {
  const { farcaster } = useFarcaster();
  const [propertiesSetup, setPropertiesSetup] = useState(false);

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  useEffect(() => {
    setPropertiesSetup(false);

    setProperties([
      ["--t-nav", topNavHeight],
      ["--b-nav", bottomNavHeight],
    ]);

    if (safeAreaInsets !== undefined) {
      setProperties([
        ["--fc-safe-area-inset-top", `${safeAreaInsets.top}px`],
        ["--fc-safe-area-inset-bottom", `${safeAreaInsets.bottom}px`],
        ["--fc-safe-area-inset-left", `${safeAreaInsets.left}px`],
        ["--fc-safe-area-inset-right", `${safeAreaInsets.right}px`],
      ]);
    }

    setPropertiesSetup(true);
  }, [bottomNavHeight, safeAreaInsets, setPropertiesSetup, topNavHeight]);

  // Avoid rendering before properties are set to prevent layout shifts
  if (propertiesSetup === false) {
    return null;
  }

  if (safeAreaInsets !== undefined) {
    return (
      <>
        <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[var(--fc-safe-area-inset-top)]" />
        <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[var(--fc-safe-area-inset-bottom)]" />
        <div className="px-safe mt-[calc(var(--fc-safe-area-inset-top)+var(--t-nav))] mr-[var(--fc-safe-area-inset-right)] mb-[calc(var(--fc-safe-area-inset-bottom)+var(--b-nav))] ml-[var(--fc-safe-area-inset-left)] min-h-[calc(100dvh-(var(--fc-safe-area-inset-top)+var(--fc-safe-area-inset-bottom)+var(--t-nav)+var(--b-nav)))]">
          <div className="max-w-global mx-auto">{children}</div>
        </div>
      </>
    );
  }

  // PWA fallback for when Farcaster SDK is not available
  return (
    <>
      <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[env(safe-area-inset-top)]" />
      <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[env(safe-area-inset-bottom)]" />
      <div className="px-safe mt-[calc(env(safe-area-inset-top)+var(--t-nav))] mr-[env(safe-area-inset-right)] mb-[calc(env(safe-area-inset-bottom)+var(--b-nav))] ml-[env(safe-area-inset-left)] min-h-[calc(100dvh-(env(safe-area-inset-top)+env(safe-area-inset-bottom)+var(--t-nav)+var(--b-nav)))]">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
