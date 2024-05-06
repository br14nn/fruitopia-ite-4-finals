"use client";

import Image from "next/image";
import { IconContext } from "react-icons";
import { BsBagPlusFill } from "react-icons/bs";

export default function ProductCard() {
  return (
    <div className="flex h-fit flex-col items-center gap-2 rounded-md border border-violet-300 bg-white p-2 drop-shadow-2xl">
      <Image
        className="object aspect-square w-full rounded-md object-cover"
        src="https://images.unsplash.com/photo-1490885578174-acda8905c2c6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={512}
        height={512}
        alt="Product image"
      />
      <p className="w-full text-center font-medium text-secondary-color">
        Product Title
      </p>
      <p>₱500.00</p>
      <button className="flex w-full justify-center rounded-md border border-accent-color py-2">
        <IconContext.Provider value={{ color: "rgb(73,142,41)" }}>
          <BsBagPlusFill />
        </IconContext.Provider>
      </button>
    </div>
  );
}
