import Image from "next/image";

import HeroSection from "@/components/HeroSection/HeroSection";
import HeroBg1 from "@/components/HeroBg/HeroBg1";
import HeroBg2 from "@/components/HeroBg/HeroBg2";

export default async function HomePage() {
  return (
    <>
      <HeroBg1 />
      <HeroBg2 />
      <main className="h-fit w-full">
        <HeroSection />
        <section className="h-screen w-full max-w-[2000px]"></section>
      </main>
    </>
  );
}
