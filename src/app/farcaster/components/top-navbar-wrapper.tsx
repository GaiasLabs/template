"use client";

import { cn } from "@/lib/utils";
import { useFarcaster } from "@/providers/farcaster-provider";

export function TopNavbarWrapper({ children }: { children: React.ReactNode }) {
  const { farcaster } = useFarcaster();

  const isFarcasterMiniApp = farcaster?.client.safeAreaInsets !== undefined;

  return (
    <div
      className={cn(
        "bg-background px-safe fixed top-0 right-0 left-0 z-50 flex h-[var(--t-nav)] w-full justify-center border-b",
        isFarcasterMiniApp === true
          ? "mt-[var(--fc-safe-area-inset-top)]"
          : "mt-[env(safe-area-inset-top)]",
      )}
    >
      {children}
    </div>
  );
}
