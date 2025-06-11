"use client";

import { BottomNavbarWrapper } from "@/app/pwa/components/bottom-navbar-wrapper";
import { cn } from "@/lib/utils";
import { CircleUser, CogIcon, HomeIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navRoutes = [
  "/pwa",
  "/pwa/about",
  "/pwa/profile",
  "/pwa/settings",
] as const;

type NavRoutes = (typeof navRoutes)[number];

const navSetup: Record<
  NavRoutes,
  {
    name: string;
    isActive: string[];
    icon: React.ReactNode;
  }
> = {
  "/pwa": {
    name: "Home",
    isActive: ["/pwa"],
    icon: <HomeIcon className="size-6" />,
  },
  "/pwa/about": {
    name: "About",
    isActive: ["/pwa/about"],
    icon: <InfoIcon className="size-6" />,
  },
  "/pwa/profile": {
    name: "Profile",
    isActive: ["/pwa/profile"],
    icon: <CircleUser className="size-6" />,
  },
  "/pwa/settings": {
    name: "Settings",
    isActive: ["/pwa/settings"],
    icon: <CogIcon className="size-6" />,
  },
} as const;

export const bottomNavHeight = "calc(4rem + 1px)";

export function PwaBottomNavbar() {
  const pathname = usePathname();

  return (
    <BottomNavbarWrapper>
      <nav className="max-w-global flex h-full w-full items-center justify-evenly">
        {navRoutes.map((route, index) => {
          const activeRoutes = navSetup[route].isActive;

          const isActive = activeRoutes.includes(pathname);

          return (
            <Link
              key={`bottom-navbar-link-${route}-${index}`}
              href={route}
              className={cn(
                "hover:bg-muted flex h-full flex-1 flex-col items-center justify-center overflow-hidden",
                isActive && "underline",
              )}
            >
              {navSetup[route].icon}
              <div className="text-xs">{navSetup[route].name}</div>
            </Link>
          );
        })}
      </nav>
    </BottomNavbarWrapper>
  );
}
