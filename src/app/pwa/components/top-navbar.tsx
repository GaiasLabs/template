"use client";

import { useSafeArea } from "@/app/pwa/components/safe-area-provider";
import { TopNavbarWrapper } from "@/app/pwa/components/top-navbar-wrapper";
import { useEffect } from "react";

export function PwaTopNavbar() {
  const { setHasBottomNavbar } = useSafeArea();

  useEffect(() => {
    setHasBottomNavbar(true);
  }, [setHasBottomNavbar]);

  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
