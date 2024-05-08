"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="min-h-150 mx-auto flex h-screen w-full max-w-[2000px] items-center justify-center p-9">
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex flex-col items-end justify-center">
            <p className="text-3xl text-white">FRESH</p>
          </div>

          <m.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
            className="h-36 w-3 bg-yellow-500"
          />
          <div className="flex flex-col items-end justify-center">
            <p className="text-3xl text-white">FRUITS</p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
