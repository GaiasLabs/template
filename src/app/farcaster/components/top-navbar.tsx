"use client";

import { useSafeArea } from "@/app/farcaster/components/safe-area-provider";
import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";
import { useEffect } from "react";

export function TopNavbar() {
  const { setHasTopNavbar } = useSafeArea();

  useEffect(() => {
    setHasTopNavbar(true);
  }, [setHasTopNavbar]);

  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
