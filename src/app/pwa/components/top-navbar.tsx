"use client";

import { TopNavbarWrapper } from "@/app/pwa/components/top-navbar-wrapper";

export const topNavHeight = "calc(4rem + 1px)";

export function PwaTopNavbar() {
  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
