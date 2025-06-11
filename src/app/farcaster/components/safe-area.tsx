"use client";

import { useFarcaster } from "@/providers/farcaster-provider";

function setProperty(name: string, value: string) {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(name, value);
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

  setProperty("--t-nav", topNavHeight);
  setProperty("--b-nav", bottomNavHeight);

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  if (typeof safeAreaInsets !== "undefined") {
    setProperty("--fc-safe-area-inset-top", `${safeAreaInsets.top}`);
    setProperty("--fc-safe-area-inset-bottom", `${safeAreaInsets.bottom}`);
    setProperty("--fc-safe-area-inset-left", `${safeAreaInsets.left}`);
    setProperty("--fc-safe-area-inset-right", `${safeAreaInsets.right}`);

    return (
      <>
        <div className="bg-background pointer-events-none fixed top-0 right-0 left-0 z-99999 h-[env(--fc-safe-area-inset-top)]" />
        <div className="bg-background pointer-events-none fixed right-0 bottom-0 left-0 z-99999 h-[env(--fc-safe-area-inset-bottom)]" />
        <div className="px-safe mt-[calc(env(--fc-safe-area-inset-top)+var(--t-nav))] mr-[env(--fc-safe-area-inset-right)] mb-[calc(env(--fc-safe-area-inset-bottom)+var(--b-nav))] ml-[env(--fc-safe-area-inset-left)] min-h-[calc(100dvh-(env(--fc-safe-area-inset-top)+env(--fc-safe-area-inset-bottom)+var(--t-nav)+var(--b-nav)))]">
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
