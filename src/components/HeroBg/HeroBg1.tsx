"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import heroBg1 from "@/assets/images/hero-bg-1.png";

export default function HeroBg1() {
  const MImage = m(Image);
  return (
    <LazyMotion features={domAnimation}>
      <MImage
        initial={{
          transformOrigin: "top left",
          translateX: "-10rem",
          translateY: "-10rem",
          opacity: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        animate={{
          opacity: 1,
          translateX: "0",
          translateY: "0",
        }}
        className="absolute left-0 top-0 h-auto w-72 lg:w-96 2xl:w-auto"
        src={heroBg1}
        alt="hero bg 1"
        priority={true}
      />
    </LazyMotion>
  );
}
