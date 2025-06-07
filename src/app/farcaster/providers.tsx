"use client";

import { FarcasterSafeAreaWrapper } from "@/app/farcaster/components/safe-area-wrapper";
import { ThemeProvider } from "@/providers/theme-provider";
import { FarcasterProvider } from "@/providers/farcaster-provider";

export function FarcasterProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FarcasterProvider>
      <ThemeProvider>
        <FarcasterSafeAreaWrapper>{children}</FarcasterSafeAreaWrapper>
      </ThemeProvider>
    </FarcasterProvider>
  );
}
