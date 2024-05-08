"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function HeroSection() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="min-h-150 mx-auto flex h-screen w-full max-w-[2000px] items-center justify-center p-9">
        <div className="flex flex-row items-center justify-center gap-6 leading-none">
          <div className="flex flex-col items-end justify-center overflow-hidden">
            <m.p
              initial={{ transformOrigin: "left", translateX: "100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-3xl text-white"
            >
              FRESH
            </m.p>
            <m.p
              initial={{ transformOrigin: "left", translateX: "100%" }}
              transition={{ ease: "easeOut", duration: 0.35, delay: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-lg text-yellow-500"
            >
              est. 2024
            </m.p>
          </div>

          <m.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className="h-44 w-3 bg-yellow-500"
          />
          <div className="flex flex-col items-start justify-center overflow-hidden">
            <m.p
              initial={{ transformOrigin: "left", translateX: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.35, delay: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-lg text-yellow-500"
            >
              Only in Fruitopia
            </m.p>
            <m.p
              initial={{ transformOrigin: "left", translateX: "-100%" }}
              transition={{ ease: "easeOut", duration: 0.4 }}
              animate={{ translateX: "0%" }}
              className="text-3xl text-white"
            >
              FRUITS
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
