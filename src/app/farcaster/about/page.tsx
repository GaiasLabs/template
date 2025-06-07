import Link from "next/link";

export default function Page() {
  return (
    <main className="flex gap-4">
      About
      <Link href="/farcaster">Go Home</Link>
    </main>
  );
}
