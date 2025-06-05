import { useNavigate } from "react-router-dom";
import type { Product } from "../../features/api/productsApi";
import { useAppDispatch } from "../../app/hooks";
import { setCart } from "../../features/store/slice";

interface ProductProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductProps) => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const handleClickDetails = () => {
    navigation(`/details/${product.id}`);
  };

  const handleAddCart = () => {
    dispatch(setCart(product));
  };

  const { title, image, price } = product;

  return (
    <li className="dark:shadow-0 flex max-w-[150px] flex-col justify-between rounded-xl border-black p-3 shadow-md @sm:max-w-[190px] @lg:max-w-[250px] dark:border-2 dark:border-white">
      <div className="mb-2 overflow-hidden rounded-2xl border-2 bg-white">
        <img
          className="h-40 w-40 cursor-pointer object-contain transition duration-300 ease-in-out hover:opacity-80 sm:h-96 sm:w-96 @sm:h-80 @sm:w-80"
          onClick={handleClickDetails}
          src={image}
          alt={title}
          title={title}
        />
      </div>
      <h4 className="wrap mb-2 cursor-pointer text-sm @lg:text-lg" onClick={handleClickDetails}>
        {title.substring(0, 30)}
        {title.length > 30 && "..."}
      </h4>
      <button
        onClick={handleAddCart}
        type="button"
        className="inline-block min-w-[100px] cursor-pointer rounded-2xl border-2 bg-orange-400 px-1 py-2 text-center text-xl text-white transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
      >
        {price} $
      </button>
    </li>
  );
};
