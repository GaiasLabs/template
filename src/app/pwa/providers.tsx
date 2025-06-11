"use client";

import { ThemeProvider } from "@/providers/theme-provider";

export function PwaProviders({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
