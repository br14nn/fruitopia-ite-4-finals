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
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;

    if (id === "deleteCartItem") {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`, {
          method: "DELETE",
          body: JSON.stringify({ fruitId: fruitId }),
        });

        revalidateAllPaths();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex w-full flex-row items-center gap-4 rounded-lg border-2 border-white p-2 text-white">
      <Image
        className="aspect-square w-full max-w-28 rounded-lg object-cover lg:max-w-36"
        src={imgSrc}
        width={512}
        height={0}
        alt="Fruit Image"
      />
      <div className="flex h-full flex-grow flex-col justify-between">
        <div className="flex flex-col gap-2">
          <p className="max-w-50 truncate text-yellow-500 lg:text-md">{name}</p>
          <p className="text-sm text-white/50 lg:text-base">
            QTY: <span className="font-bold text-white">{quantity}</span>
          </p>
          <p className="text-sm text-white/50 lg:text-base">
            Total: <span className="font-bold text-white">₱{totalPrice}</span>
          </p>
        </div>
        <button
          className="w-full max-w-28 self-end rounded-full border-2 border-red-600 py-0.5 text-sm transition-colors duration-300 hover:bg-red-600 active:border-red-300 active:bg-red-300 lg:text-base"
          id="deleteCartItem"
          onClick={handleClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
