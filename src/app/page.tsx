import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";

import heroBg1 from "@/assets/images/hero-bg-1.png";
import heroBg2 from "@/assets/images/hero-bg-2.png";

export default async function HomePage() {
  return (
    <main className="h-fit w-full">
      <HeroSection />
    </main>
  );
}
