import { ProductListCart } from "./list-cart";
import plural from "plural-ru";
import { TotalAmountContent } from "./total-amount-content";

export const PageCart = () => {
  const itemText = plural(10, "товар", "товара", "товаров");

  return (
    <div className="mx-auto grid max-w-[1230px] grid-cols-[auto_1fr_auto] gap-5 px-[10px]">
      <h3 className="col-span-full text-4xl">
        Корзина <span className="text-xl">колличество {itemText}</span>
      </h3>
      <ProductListCart />
      <TotalAmountContent />
    </div>
  );
};
