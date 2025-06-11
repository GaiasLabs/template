"use client";

import { PwaSafeAreaProvider } from "@/app/pwa/components/safe-area-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function PwaProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PwaSafeAreaProvider>{children}</PwaSafeAreaProvider>
    </ThemeProvider>
  );
}
