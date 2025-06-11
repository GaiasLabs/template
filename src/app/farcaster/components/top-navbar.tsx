"use client";

import { TopNavbarWrapper } from "@/app/farcaster/components/top-navbar-wrapper";
import { useEffect } from "react";

export function TopNavbar() {
  useEffect(() => {
    document.documentElement.style.setProperty("--t-nav", "calc(4rem + 1px)");
  }, []);

  return (
    <TopNavbarWrapper>
      <div className="max-w-global z-50 flex h-full w-full items-center justify-between">
        <div>left</div>
        <div>right</div>
      </div>
    </TopNavbarWrapper>
  );
}
