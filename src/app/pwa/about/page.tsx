import { PwaTopNavbar } from "@/app/pwa/components/top-navbar";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PwaTopNavbar />
      <main className="flex gap-4">
        About
        <Link href="/pwa">Go Home</Link>
      </main>
    </>
  );
}
