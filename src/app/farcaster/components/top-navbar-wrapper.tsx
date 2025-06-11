"use client";

import { useFarcaster } from "@/providers/farcaster-provider";

export function TopNavbarWrapper({ children }: { children: React.ReactNode }) {
  const { farcaster } = useFarcaster();

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  return (
    <div
      style={
        typeof safeAreaInsets !== "undefined"
          ? { marginTop: `${safeAreaInsets.top}px` }
          : undefined
      }
      className="bg-background px-safe fixed top-0 right-0 left-0 z-50 mt-[env(safe-area-inset-top)] flex h-[var(--t-nav)] w-full justify-center border-b"
    >
      {children}
    </div>
  );
}
