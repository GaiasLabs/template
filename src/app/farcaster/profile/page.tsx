import Link from "next/link";

export default function Page() {
  return (
    <main className="flex gap-4">
      Profile
      <Link href="/farcaster">Go Home</Link>
    </main>
  );
}
