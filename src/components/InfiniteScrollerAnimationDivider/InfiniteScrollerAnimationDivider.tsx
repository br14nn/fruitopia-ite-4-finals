"use client";

import { m, LazyMotion, domAnimation } from "framer-motion";

export default function InfiniteScrollerAnimationDivider() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative z-20 flex w-full max-w-[2000px] flex-col gap-1 overflow-hidden text-md leading-none text-white sm:gap-2 sm:text-lg md:gap-0 md:text-xl lg:text-2xl">
        <m.div
          initial={{ translateX: "-50%" }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          animate={{ translateX: "0%" }}
          className="flex w-fit flex-row gap-6 px-3"
        >
          <div className="flex w-fit select-none flex-row gap-6">
            <p className=" font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
          </div>
          <div className="flex w-fit select-none flex-row gap-6">
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
          </div>
        </m.div>
        <m.div
          initial={{ translateX: "0%" }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          animate={{ translateX: "-50%" }}
          className="flex w-fit select-none flex-row gap-6 px-3"
        >
          <div className="flex w-fit select-none flex-row gap-6">
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
          </div>
          <div className="flex w-fit flex-row gap-6">
            <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p> <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p> <p>AVAILABLE</p>
            <p>FRUITS</p>
            <p className="font-bold text-yellow-500">OUR</p>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
}
