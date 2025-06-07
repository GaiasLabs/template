"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";

export function TopNavbar({ display }: { display: boolean }) {
  if (display === false) return null;

  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
