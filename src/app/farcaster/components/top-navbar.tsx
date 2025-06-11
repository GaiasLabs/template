"use client";

import { useSafeArea } from "@/app/farcaster/components/safe-area-provider";
import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";

export function TopNavbar() {
  useSafeArea("top");

  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
