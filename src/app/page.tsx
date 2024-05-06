import Image from "next/image";

import CustomSection from "@/components/CustomSection";

export default async function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1920px] flex-col items-center justify-center">
      <CustomSection className="flex h-[100svh] flex-col items-start justify-center gap-4 bg-[url('../assets/images/hero-bg.jpg')] bg-cover bg-no-repeat px-4 leading-none md:items-center">
        <h1 className="text-3xl font-bold tracking-wider text-white lg:text-5xl">
          Welcome to Fruitopia
        </h1>
        <h2 className="max-w-100 text-start leading-normal text-white/80 md:text-center lg:max-w-160 lg:text-lg">
          Indulge in{" "}
          <span className="font-bold text-white">Nature's Abundance:</span>{" "}
          Discover the Juiciest Selection of Fresh Fruits Delivered to Your
          Doorstep,{" "}
          <span className="font-bold text-white">Only at Fruitopia</span> -
          Where Every Bite Ignites a Symphony of Flavor, Health, and Joy!
        </h2>
      </CustomSection>
      <CustomSection className="px-4 py-8"></CustomSection>
    </main>
  );
}