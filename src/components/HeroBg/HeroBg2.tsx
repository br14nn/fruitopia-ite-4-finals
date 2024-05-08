"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

import heroBg2 from "@/assets/images/hero-bg-2.png";

export default function HeroBg2() {
  const MImage = m(Image);
  return (
    <LazyMotion features={domAnimation}>
      <MImage
        initial={{
          transformOrigin: "bottom right",
          translateX: "10rem",
          translateY: "10rem",
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
        className="absolute -bottom-64 right-0"
        src={heroBg2}
        alt="hero bg 1"
      />
    </LazyMotion>
  );
}
