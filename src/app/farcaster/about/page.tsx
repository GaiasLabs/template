import { SafeArea } from "@/app/farcaster/components/safe-area";
import { TopNavbar, topNavHeight } from "@/app/farcaster/components/top-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <SafeArea {...{ topNavHeight }}>
      <TopNavbar />
      <main className="flex gap-4">
        About
        <Link href="/farcaster">Go Home</Link>
      </main>
    </SafeArea>
  );
}
