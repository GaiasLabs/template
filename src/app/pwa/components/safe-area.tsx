"use client";

import { useEffect, useState } from "react";

function setProperties(data: [string, string][]) {
  if (typeof window !== "undefined") {
    data.forEach(([property, value]) => {
      document.documentElement.style.setProperty(property, value);
    });
  }
}

export function PwaSafeArea({
  children,
  topNavHeight = "0px",
  bottomNavHeight = "0px",
}: {
  children: React.ReactNode;
  topNavHeight?: string;
  bottomNavHeight?: string;
}) {
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  useEffect(() => {
    setIsReadyToRender(false);

    setProperties([
      ["--t-nav", topNavHeight],
      ["--b-nav", bottomNavHeight],
    ]);

    setIsReadyToRender(true);
  }, [bottomNavHeight, setIsReadyToRender, topNavHeight]);

  // Avoid rendering before properties are set to prevent layout shifts
  if (isReadyToRender === false) {
    return null;
  }

  return (
    <>
      <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[env(safe-area-inset-top)]" />
      <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[env(safe-area-inset-bottom)]" />
      <div className="px-safe mt-[calc(env(safe-area-inset-top)+var(--t-nav))] mr-[env(safe-area-inset-right)] mb-[calc(env(safe-area-inset-bottom)+var(--b-nav))] ml-[env(safe-area-inset-left)]">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
