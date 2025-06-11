"use client";

import { useFarcaster } from "@/providers/farcaster-provider";

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

  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty("--t-nav", topNavHeight);
    document.documentElement.style.setProperty("--b-nav", bottomNavHeight);
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
            marginBottom: `calc(${safeAreaInsets.bottom}px + var(--b-nav))`,
            marginTop: `calc(${safeAreaInsets.top}px + var(--t-nav))`,
            minHeight: `calc(100dvh - (${verticalSafeAreaInsets} + var(--t-nav) + var(--b-nav)))`,
          }}
        >
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
