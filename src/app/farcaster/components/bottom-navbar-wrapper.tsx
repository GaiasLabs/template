"use client";

import { cn } from "@/lib/utils";
import { useFarcaster } from "@/providers/farcaster-provider";

export function BottomNavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { farcaster } = useFarcaster();

  const isFarcasterMiniApp = farcaster?.client.safeAreaInsets !== undefined;

  return (
    <div
      className={cn(
        "bg-background px-safe fixed right-0 bottom-0 left-0 z-50 flex h-[var(--b-nav)] justify-center border-t",
        isFarcasterMiniApp === true
          ? "mb-[var(--fc-safe-area-inset-bottom)]"
          : "mb-[env(safe-area-inset-bottom)]",
      )}
    >
      {children}
    </div>
  );
}
