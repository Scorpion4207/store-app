import barry from "../../assets/image/berry.jpeg";
export const ProductCart = () => {
  return (
    <li className="grid-cols-[auto_1fr_auto] grid gap-5 rounded-2xl border-2 p-3">
      <div className="overflow-hidden rounded-2xl border-2">
        <img src={barry} className="" width={150} alt="Название товара" />
      </div>
      <h5>
        Название товара:
        <p>{"?"}</p>
      </h5>
      <p className="justify-self-end">Цена: {"?"}</p>
    </li>
  );
};
