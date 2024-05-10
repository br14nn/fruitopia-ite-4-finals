"use client";

import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { BsPlus, BsDash } from "react-icons/bs";

import { revalidateAllPaths } from "@/utils/actions/actions";

interface IFruitProductCartCardProps {
  orderId: number;
  fruitId: number;
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;
}

export default function FruitProductCartCard({
  orderId,
  fruitId,
  name,
  imgSrc,
  price,
  quantity,
}: IFruitProductCartCardProps) {
  const [deleteButtonDisabled, setDeleteButtonDisabled] =
    useState<boolean>(false);
  const [showUpdateButtons, setShowUpdateButtons] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(quantity);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    if (id === "incrementButton") {
      setQty((oldVal) => oldVal + 1);
    }
    if (id === "decrementButton" && qty > 1) {
      setQty((oldVal) => oldVal - 1);
    }
    if (id === "updateCartItem") {
      setShowUpdateButtons(false);
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`,
        {
          orderId: orderId,
          quantity: qty,
        },
      );
      if (res) {
        revalidateAllPaths();
        alert("Your cart has been updated!");
      }
    }
    if (id === "editCartItem") {
      setShowUpdateButtons(true);
    }
    if (id === "deleteCartItem") {
      setDeleteButtonDisabled(true);
      try {
        const res = await axios.delete(
          `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`,
          {
            data: {
              orderId: orderId,
            },
          },
        );
        if (res) {
          setDeleteButtonDisabled(false);
          revalidateAllPaths();
          alert("Successfully deleted an item in your cart!");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex h-fit w-full flex-row gap-4 rounded-lg border-2 border-white p-2 text-white">
      <Image
        className="aspect-square w-full max-w-28 rounded-lg object-cover lg:max-w-36"
        src={imgSrc}
        width={512}
        height={0}
        alt="Fruit Image"
        priority
      />
      <div className="flex h-auto flex-grow flex-col justify-between">
        <div className="flex flex-col gap-1">
          <p className="max-w-50 truncate text-yellow-500 lg:text-md">{name}</p>
          <p className="text-sm text-white/50 lg:text-base">
            QTY: <span className="font-bold text-white">{qty}</span>
          </p>
          <p className="text-sm text-white/50 lg:text-base">
            Total:{" "}
            <span className="font-bold text-white">
              ₱{(price * qty).toFixed(2)}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-1">
          {showUpdateButtons && (
            <div className="flex flex-grow items-center justify-end gap-1 leading-none">
              <button
                className="aspect-square rounded-lg bg-red-500 p-1 font-bold transition-colors duration-300 hover:bg-red-400 active:bg-red-300"
                id="decrementButton"
                onClick={handleClick}
              >
                <BsDash />
              </button>
              <button
                className="aspect-square rounded-lg bg-green-500 p-1 font-bold transition-colors duration-300 hover:bg-green-400 active:bg-green-300"
                id="incrementButton"
                onClick={handleClick}
              >
                <BsPlus />
              </button>
            </div>
          )}
          {!showUpdateButtons ? (
            <button
              className="flex-grow rounded-full border-2 border-orange-500 py-0.5 text-sm transition-colors duration-300 hover:bg-orange-500 active:border-orange-300 active:bg-orange-300 lg:text-base"
              id="editCartItem"
              onClick={handleClick}
            >
              Edit
            </button>
          ) : (
            <button
              className="flex-grow rounded-full border-2 border-orange-500 py-0.5 text-sm transition-colors duration-300 hover:bg-orange-500 active:border-orange-300 active:bg-orange-300 lg:text-base"
              id="updateCartItem"
              onClick={handleClick}
            >
              Ok
            </button>
          )}
          <button
            className="flex-grow rounded-full border-2 border-red-600 py-0.5 text-sm transition-colors duration-300 hover:bg-red-600 active:border-red-300 active:bg-red-300 disabled:border-red-900 disabled:bg-red-900 lg:text-base"
            id="deleteCartItem"
            onClick={handleClick}
            disabled={deleteButtonDisabled}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
