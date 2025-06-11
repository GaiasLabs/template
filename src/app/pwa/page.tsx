import { PwaBottomNavbar } from "@/app/pwa/components/bottom-navbar";
import { PwaTopNavbar } from "@/app/pwa/components/top-navbar";

export default function HomePage() {
  return (
    <>
      <PwaTopNavbar />
      <main>Home</main>
      <PwaBottomNavbar />
    </>
  );
}
