import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

import FruitProductCartCard from "@/components/FruitProductCartCard/FruitProductCartCard";
import { nanoid } from "nanoid";

export default async function BasketPage() {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) redirect("/");
  } catch (error) {
    redirect("/");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/cart`, {
    method: "GET",
    cache: "no-cache",
  });
  const data = (await res.json()) as ICart[];
  const totalPrice = (): number => {
    return data.reduce((total, fruit) => {
      return total + fruit.quantity * fruit.fruit.price;
    }, 0);
  };

  return (
    <main className="flex h-fit w-full">
      <section className="flex h-screen w-full max-w-[2000px] flex-col gap-4 px-10 pb-10 pt-24 md:px-20 md:pt-32">
        <h1 className="text-lg leading-none text-white">My Cart</h1>
        <hr className="w-full border-2 border-yellow-500" />
        <div className="grid h-full w-full grid-cols-1 gap-4 overflow-y-auto px-2 sm:grid-cols-2">
          {data.map((cart) => (
            <FruitProductCartCard
              key={nanoid()}
              fruitId={cart.fruitId}
              name={cart.fruit.name}
              imgSrc={cart.fruit.image}
              quantity={cart.quantity.toString()}
              totalPrice={(cart.quantity * cart.fruit.price)
                .toFixed(2)
                .toString()}
            />
          ))}
        </div>
        <hr className="w-full border-2 border-yellow-500" />
        <div className="flex w-full flex-row items-center justify-between gap-4 sm:justify-end">
          <p className="text-white/50 lg:text-md">
            Total:{" "}
            <span className="font-bold text-white/100">
              ₱{totalPrice().toFixed(2)}
            </span>
          </p>

          <button
            id="checkout"
            className="rounded-full border-2 border-green-500 px-6 py-0.5 text-white transition-colors duration-300 hover:bg-green-500 active:border-green-300 active:bg-green-300"
          >
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}
