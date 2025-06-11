import { PwaSafeArea } from "@/app/pwa/components/safe-area";
import { PwaTopNavbar, topNavHeight } from "@/app/pwa/components/top-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <PwaSafeArea {...{ topNavHeight }}>
      <PwaTopNavbar />
      <main className="flex gap-4">
        About
        <Link href="/pwa">Go Home</Link>
      </main>
    </PwaSafeArea>
  );
}
