"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";

import { createClient } from "@/utils/supabase/client";
import { revalidateSepcificPath } from "@/utils/actions/actions";

interface IFruitProductCardProps {
  id: number;
  imgSrc: string;
  name: string;
  price: string;
  description: string;
}

export default function FruitProductCard({
  id,
  imgSrc,
  name,
  price,
  description,
}: IFruitProductCardProps) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const handleClick = async () => {
    setDisabled(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setDisabled(false);
        return alert("Must be logged in to add fruits to the cart");
      }
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`,
        {
          userId: user.id,
          fruitId: id,
        },
      );

      if (res) {
        revalidateSepcificPath("/basket");
        setDisabled(false);
        alert("Added to cart successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <figure className="flex w-full flex-col gap-4 rounded-lg border-2 border-white p-4">
      <Image
        className="aspect-square w-full rounded-lg object-cover"
        src={imgSrc}
        width={512}
        height={0}
        alt="Fruit image"
        loading="lazy"
      />
      <figcaption className="flex w-full flex-col items-center gap-4">
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <p
            className="flex-grow truncate text-md text-yellow-500 xl:text-lg"
            title={name}
          >
            {name}
          </p>
          <p className="tracking-widest-xl text-white xl:text-md">
            ₱{price.toUpperCase()}
          </p>
        </div>
        <p className="line-clamp-3 text-justify text-sm text-white/50 xl:text-base">
          {description}
        </p>
        <button
          className="duratin-300 w-full rounded-lg border-2 border-yellow-500 py-2 text-yellow-500 transition-colors hover:bg-yellow-500 hover:text-zinc-950 active:bg-yellow-300 disabled:border-yellow-900 disabled:bg-yellow-900 xl:text-md"
          onClick={handleClick}
          disabled={disabled}
        >
          Add to cart
        </button>
      </figcaption>
    </figure>
  );
}
