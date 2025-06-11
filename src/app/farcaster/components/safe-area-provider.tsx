"use client";

import { useFarcaster } from "@/providers/farcaster-provider";

export function SafeAreaProvider({ children }: { children: React.ReactNode }) {
  const { farcaster } = useFarcaster();

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
      <div className="bg-background h-t-inset pointer-events-none fixed top-0 right-0 left-0 z-99999" />
      <div className="bg-background h-b-inset pointer-events-none fixed right-0 bottom-0 left-0 z-99999" />
      <div className="px-safe mr-r-inset ml-l-inset mb-b-inset mt-t-inset min-h-content-inset">
        <div className="max-w-global mx-auto">{children}</div>
      </div>
    </>
  );
}
