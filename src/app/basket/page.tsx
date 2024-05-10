import { redirect } from "next/navigation";
import { nanoid } from "nanoid";
import axios from "axios";

import CheckoutButton from "@/components/CheckoutButton/CheckoutButton";
import FruitProductCartCard from "@/components/FruitProductCartCard/FruitProductCartCard";

import { createClient } from "@/utils/supabase/server";

export default async function BasketPage() {
  let data: ICart[] = [];
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/");

  try {
    const {
      data: { res },
    } = (await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/cart/user/${user.id}`,
    )) as { data: { res: ICart[] } };
    data = res;
  } catch (error) {
    console.error(error);
  }

  const totalPrice = (): number => {
    return data.reduce((total, fruit) => {
      return total + fruit.quantity * fruit.fruit.price;
    }, 0);
  };

  return (
    <main className="flex h-fit w-full">
      <section className="flex h-screen w-full max-w-[2000px] flex-col gap-4 px-10 pb-10 pt-24 md:px-20 md:pt-32">
        <h1 className="text-center text-lg leading-none text-white">My Cart</h1>
        <hr className="w-full border-2 border-yellow-500" />
        <div className="grid h-full w-full grid-cols-1 content-start gap-4 overflow-y-auto px-2 sm:grid-cols-2">
          {data.map((cart) => (
            <FruitProductCartCard
              key={nanoid()}
              orderId={cart.id}
              fruitId={cart.fruitId}
              name={cart.fruit.name}
              imgSrc={cart.fruit.image}
              quantity={cart.quantity}
              price={cart.fruit.price}
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

          <CheckoutButton />
        </div>
      </section>
    </main>
  );
}
