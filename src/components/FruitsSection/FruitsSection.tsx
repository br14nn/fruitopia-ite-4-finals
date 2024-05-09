import FruitProductCard from "../FruitProductCard/FruitProductCard";
import FruitsSectionSearchForm from "./FruitsSectionSearchForm";

export default function FruitsSection() {
  return (
    <section
      id="fruits"
      className="relative z-10 flex h-fit w-full max-w-[2000px] flex-col gap-20 px-4 pb-4 pt-20 md:px-9 md:pb-9"
    >
      <FruitsSectionSearchForm />

      <div className="grid w-full grid-cols-1 place-items-center gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"></div>
    </section>
  );
}
