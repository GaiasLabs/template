"use client";

import { ThemeProvider } from "@/providers/theme-provider";
import { FarcasterProvider } from "@/providers/farcaster-provider";
import { SafeAreaProvider } from "@/app/farcaster/components/safe-area-provider";

export function FarcasterProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FarcasterProvider>
      <ThemeProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </ThemeProvider>
    </FarcasterProvider>
  );
}
