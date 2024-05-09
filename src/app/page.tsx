import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
import HeroBg1 from "@/components/HeroBg/HeroBg1";
import HeroBg2 from "@/components/HeroBg/HeroBg2";
import InfiniteScrollerAnimationDivider from "@/components/InfiniteScrollerAnimationDivider/InfiniteScrollerAnimationDivider";
import FruitsSection from "@/components/FruitsSection/FruitsSection";

export default async function HomePage() {
  return (
    <>
      <HeroBg1 />
      <HeroBg2 />
      <main className="h-fit w-full">
        <HeroSection />
        <InfiniteScrollerAnimationDivider />
        <FruitsSection />
      </main>
    </>
  );
}
