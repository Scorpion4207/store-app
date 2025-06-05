import plural from "plural-ru";
import { useSelectHook } from "../../features/store/slice";

export const TotalAmountContent = () => {
  const { selectCart } = useSelectHook();

  const itemText = plural(selectCart.length, "товар", "товара", "товаров");

  const cartTotalPrice = selectCart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="sticky top-5 mt-5 h-max min-w-[250px] rounded-2xl border-2 px-4 py-2 md:mt-0">
      <p className="pb-5 text-2xl">Итог: </p>
      <div className="flex justify-between gap-5 pb-5">
        <p>
          {selectCart.length} {itemText}
        </p>
        <p>{cartTotalPrice.toFixed(2)} $</p>
      </div>
      <button className="mx-auto block cursor-pointer rounded-2xl border-2 bg-orange-400 px-5 py-3 text-white transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]">
        Оформить заказ
      </button>
    </div>
  );
};
