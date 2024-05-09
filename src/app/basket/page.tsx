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

  return (
    <main className="flex h-fit w-full">
      <section className="flex h-screen w-full max-w-[2000px] flex-col gap-8 px-20 pb-20 pt-32">
        <h1 className="text-lg leading-none text-white">My Cart</h1>
        <hr className="w-full border-2 border-yellow-500" />
        <div className="mx-auto flex max-h-[512px] w-full max-w-[900px] flex-col gap-4 overflow-y-auto px-4">
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
      </section>
    </main>
  );
}
