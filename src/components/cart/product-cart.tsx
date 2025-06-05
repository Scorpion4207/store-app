import { useAppDispatch } from "../../app/hooks";
import type { Product } from "../../features/api/productsApi";
import { setCart, setRemoveCart, useSelectHook } from "../../features/store/slice";

export const ProductCart = (product: Product) => {
  const { title, image, price } = product;
  const { selectCart } = useSelectHook();
  const dispatch = useAppDispatch();

  const handleRemoveCart = () => {
    dispatch(setRemoveCart(product.id));
  };

  const handleAddCart = () => {
    dispatch(setCart(product));
  };

  const quantity = selectCart.filter((item) => item.id === product.id).length;

  return (
    <li className="grid grid-cols-[auto_1fr] gap-5 rounded-2xl border-2 p-3 sm:grid-cols-[auto_1fr_auto]">
      <div className="h-[80px] w-[80px] overflow-hidden rounded-2xl border-2 bg-white sm:h-[150px] sm:w-[150px]">
        <img
          className="h-[80px] w-[80px] object-contain sm:h-[150px] sm:w-[150px]"
          src={image}
          alt={title}
        />
      </div>
      <h5 className="text-sm lg:text-lg">
        Название товара:
        <p>{title}</p>
      </h5>
      <div className="col-span-2 flex items-center justify-between lg:col-span-1 lg:flex-col">
        <p className="justify-self-end lg:text-lg">Цена: {price} $</p>
        <div className="flex items-center gap-2 text-3xl">
          <button
            className="block h-10 w-10 cursor-pointer rounded-xl bg-red-500 pb-1.5 transition duration-300 ease-in-out hover:opacity-80"
            onClick={handleRemoveCart}
          >
            -
          </button>
          <p className="text-xl">{quantity}</p>
          <button
            className="block h-10 w-10 cursor-pointer rounded-xl bg-green-500 pb-1.5 transition duration-300 ease-in-out hover:opacity-80"
            onClick={handleAddCart}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};
