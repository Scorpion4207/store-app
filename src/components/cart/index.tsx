import { ProductListCart } from "./list-cart";
import plural from "plural-ru";
import { TotalAmountContent } from "./total-amount-content";
import { useSelectHook } from "../../features/store/slice";

export const PageCart = () => {
  const { selectCart } = useSelectHook();

  const itemText = plural(selectCart.length, "товар", "товара", "товаров");

  return (
    <div className="mx-auto mt-10 max-w-[1230px] grid-cols-[auto_1fr_auto] gap-5 px-[10px] md:grid">
      <h3 className="col-span-full text-xl">
        Корзина{" "}
        <span className="text-sm">
          колличество: {selectCart.length} {itemText}
        </span>
      </h3>
      <ProductListCart />
      <TotalAmountContent />
    </div>
  );
};
