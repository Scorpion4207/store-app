import plural from "plural-ru";

export const TotalAmountContent = () => {
  const itemText = plural(10, "товар", "товара", "товаров");

  return (
    <div className="min-w-[300px] rounded-2xl border-2 px-4 py-10">
      <p className="pb-5 text-2xl">Итог: </p>
      <div className="flex justify-between gap-5 pb-5">
        <p>
          {"?"} {itemText}
        </p>
        <p>{"?"} ₽</p>
      </div>
      <button className="mx-auto block rounded-2xl border-2 bg-orange-400 px-5 py-3 text-white">
        Оформить заказ
      </button>
    </div>
  );
};
