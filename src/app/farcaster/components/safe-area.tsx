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
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  useEffect(() => {
    setIsReadyToRender(false);

    setProperties([
      ["--t-nav", topNavHeight],
      ["--b-nav", bottomNavHeight],
    ]);

    if (safeAreaInsets !== undefined) {
      setProperties([
        ["--safe-area-inset-top", `${safeAreaInsets.top}px`],
        ["--safe-area-inset-bottom", `${safeAreaInsets.bottom}px`],
        ["--safe-area-inset-left", `${safeAreaInsets.left}px`],
        ["--safe-area-inset-right", `${safeAreaInsets.right}px`],
      ]);
    } else {
      setProperties([
        ["--safe-area-inset-top", "env(safe-area-inset-top)"],
        ["--safe-area-inset-bottom", "env(safe-area-inset-bottom)"],
        ["--safe-area-inset-left", "env(safe-area-inset-left)"],
        ["--safe-area-inset-right", "env(safe-area-inset-right)"],
      ]);
    }

    setIsReadyToRender(true);
  }, [bottomNavHeight, safeAreaInsets, setIsReadyToRender, topNavHeight]);

  // Avoid rendering before properties are set to prevent layout shifts
  if (isReadyToRender === false) {
    return null;
  }

  return (
    <>
      <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[var(--safe-area-inset-top)]" />
      <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[var(--safe-area-inset-bottom)]" />
      <div className="px-safe mt-[calc(var(--safe-area-inset-top)+var(--t-nav))] mr-[var(--safe-area-inset-right)] mb-[calc(var(--safe-area-inset-bottom)+var(--b-nav))] ml-[var(--safe-area-inset-left)]">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
