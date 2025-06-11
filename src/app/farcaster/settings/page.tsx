import {
  BottomNavbar,
  bottomNavHeight,
} from "@/app/farcaster/components/bottom-navbar";
import { SafeArea } from "@/app/farcaster/components/safe-area";
import Link from "next/link";

export default function Page() {
  return (
    <SafeArea {...{ bottomNavHeight }}>
      <main className="flex gap-4">
        Settings
        <div className="grid">
          <div className="h-[1000px] w-12 bg-amber-400"></div>
          <div className="h-[1000px] w-12 bg-red-400"></div>
        </div>
        <Link href="/farcaster">Go Home</Link>
      </main>
      <BottomNavbar />
    </SafeArea>
  );
}
