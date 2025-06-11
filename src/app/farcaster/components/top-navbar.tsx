"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";

export const topNavHeight = "calc(4rem + 1px)";

export function TopNavbar() {
  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
