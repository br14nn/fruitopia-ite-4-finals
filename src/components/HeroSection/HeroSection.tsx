"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="min-h-150 relative z-50 mx-auto flex h-screen w-full max-w-[2000px] items-center justify-center p-9">
        <div className="flex flex-row items-center justify-center gap-3 leading-none md:gap-6">
          <div className="flex flex-col items-end justify-center overflow-hidden">
            <m.p
              initial={{ transformOrigin: "left", translateX: "100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl"
            >
              FRESH
            </m.p>
            <m.p
              initial={{ transformOrigin: "left", translateX: "100%" }}
              transition={{ ease: "easeOut", duration: 0.35, delay: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-sm text-yellow-500 sm:text-base md:text-md lg:text-lg"
            >
              est. 2024
            </m.p>
          </div>

          <m.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="h-12 w-1 bg-yellow-500 sm:h-20 md:h-28 md:w-2 lg:h-44 lg:w-3"
          />
          <div className="flex flex-col items-start justify-center overflow-hidden">
            <m.p
              initial={{ transformOrigin: "left", translateX: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.35, delay: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-sm text-yellow-500 sm:text-base md:text-md lg:text-lg"
            >
              Only in Fruitopia
            </m.p>
            <m.p
              initial={{ transformOrigin: "left", translateX: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-lg text-white sm:text-xl md:text-2xl lg:text-3xl"
            >
              FRUITS
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
