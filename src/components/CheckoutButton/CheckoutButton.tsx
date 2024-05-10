"use client";

import { useState } from "react";
import axios from "axios";
import { revalidateAllPaths } from "@/utils/actions/actions";

export default function CheckoutButton() {
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setDisabled(true);
    try {
      const { data } = (await axios.delete(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart/checkout`,
      )) as { data: ICheckout };
      setDisabled(false);
      revalidateAllPaths();
      console.log(data);
      if (data.count === 0) {
        return alert("Your cart is empty, nothing to checkout!");
      }
      alert("Checked out orders successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      id="checkout"
      className="rounded-full border-2 border-green-500 px-6 py-0.5 text-white transition-colors duration-300 hover:bg-green-500 active:border-green-300 active:bg-green-300 disabled:border-green-900 disabled:bg-green-900"
      onClick={handleClick}
      disabled={disabled}
    >
      Checkout
    </button>
  );
}
