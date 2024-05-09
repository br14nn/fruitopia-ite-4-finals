"use client";

import { revalidateAllPaths } from "@/utils/actions/actions";
import Image from "next/image";

interface IFruitProductCartCardProps {
  fruitId: number;
  imgSrc: string;
  name: string;
  totalPrice: string;
  quantity: string;
}

export default function FruitProductCartCard({
  fruitId,
  name,
  imgSrc,
  totalPrice,
  quantity,
}: IFruitProductCartCardProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`, {
        method: "DELETE",
        body: JSON.stringify({ fruitId: fruitId }),
      });

      revalidateAllPaths();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-full flex-row items-center justify-between rounded-full border-2 border-white p-4 text-white">
      <div className="flex-inital flex w-[40%] flex-row items-center gap-4 overflow-hidden">
        <Image
          className="aspect-square w-20 rounded-full"
          src={imgSrc}
          width={512}
          height={0}
          alt="Fruit Image"
        />
        <p className="text-lg text-yellow-500">{name}</p>
      </div>

      <p className="text-white">
        QTY: <span className="text-md">{quantity}</span>
      </p>

      <p className="text-white">
        Total Price: <span className="text-md font-bold">₱{totalPrice}</span>
      </p>
      <form
        className="flex h-full flex-row items-center gap-4"
        id="delete"
        onSubmit={handleSubmit}
      >
        <button className="rounded-full border-2 border-red-600 px-4 transition-colors duration-300 hover:bg-red-600 active:border-red-300 active:bg-red-300">
          Delete
        </button>
      </form>
    </div>
  );
}
