import barry from "../../assets/image/berry.jpeg";

export const ProductDetails = () => {
  return (
    <div className="mx-auto flex max-w-4xl gap-15">
      <div className="overflow-hidden rounded-4xl border-2">
        <img src={barry} width={400} height={400} alt="Товар" />
      </div>
      <div className="flex flex-col h-100%">
        <h3 className="text-4xl mb-5">Название товара</h3>
        <p className="mb-5">категория</p>
        <p>Описание</p>
        <button
          className="mt-auto cursor-pointer rounded-2xl border-2 bg-orange-400 px-8 py-3"
          type="button"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};
