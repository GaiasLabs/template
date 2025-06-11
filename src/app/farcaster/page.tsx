import {
  BottomNavbar,
  bottomNavHeight,
} from "@/app/farcaster/components/bottom-navbar";
import { SafeArea } from "@/app/farcaster/components/safe-area";
import { TopNavbar, topNavHeight } from "@/app/farcaster/components/top-navbar";

export default function HomePage() {
  return (
    <SafeArea {...{ topNavHeight, bottomNavHeight }}>
      <TopNavbar />
      <main>Home</main>
      <BottomNavbar />
    </SafeArea>
  );
}
