"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { FarcasterProvider } from "@/providers/farcaster-provider";

export function FarcasterProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FarcasterProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FarcasterProvider>
  );
}
