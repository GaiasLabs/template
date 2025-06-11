import {
  PwaBottomNavbar,
  bottomNavHeight,
} from "@/app/pwa/components/bottom-navbar";
import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import Link from "next/link";

export default function Page() {
  return (
    <PwaSafeArea {...{ bottomNavHeight }}>
      <main className="flex gap-4">
        Settings
        <div className="grid">
          <div className="h-[1000px] w-12 bg-amber-400"></div>
          <div className="h-[1000px] w-12 bg-red-400"></div>
        </div>
        <Link href="/pwa">Go Home</Link>
      </main>
      <PwaBottomNavbar />
    </PwaSafeArea>
  );
}
