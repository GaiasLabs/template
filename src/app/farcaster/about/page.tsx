import { TopNavbar } from "@/app/farcaster/components/top-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <TopNavbar />
      <main className="flex gap-4">
        About
        <Link href="/farcaster">Go Home</Link>
      </main>
    </>
  );
}
