"use client";

import { PwaSafeAreaWrapper } from "@/app/pwa/components/safe-area-wrapper";
import { ThemeProvider } from "@/providers/theme-provider";

export function PwaProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PwaSafeAreaWrapper>{children}</PwaSafeAreaWrapper>
    </ThemeProvider>
  );
}
