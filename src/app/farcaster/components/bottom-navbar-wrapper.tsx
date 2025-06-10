"use client";

import { useFarcaster } from "@/providers/farcaster-provider";

export function BottomNavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { farcaster } = useFarcaster();

  const safeAreaInsets = farcaster?.client?.safeAreaInsets;

  return (
    <div
      style={
        typeof safeAreaInsets !== "undefined"
          ? { marginBottom: `${safeAreaInsets.bottom}px` }
          : undefined
      }
      className="bg-background h-b-nav px-safe mb-b-inset fixed right-0 bottom-0 left-0 z-50 flex justify-center border-t"
    >
      {children}
    </div>
  );
}
