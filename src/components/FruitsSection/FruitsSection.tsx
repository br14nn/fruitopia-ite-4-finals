import { nanoid } from "nanoid";

import FruitProductCard from "../FruitProductCard/FruitProductCard";

export const revalidate = 3600;

export default async function FruitsSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/fruits`, {
    method: "GET",
    next: { revalidate: 3600 },
  });
  const data = (await res.json()) as IFruit[];

  return (
    <section
      id="fruits"
      className="relative z-10 flex h-fit w-full max-w-[2000px] flex-col gap-20 px-4 py-20 md:px-9"
    >
      <div className="grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {data?.map((fruit) => (
          <FruitProductCard
            key={nanoid()}
            id={fruit.id}
            name={fruit.name}
            price={fruit.price.toString()}
            description={fruit.description}
            imgSrc={fruit.image}
          />
        ))}
      </div>
    </section>
  );
}
