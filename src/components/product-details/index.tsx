import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/productsApi";
import { useAppDispatch } from "../../app/hooks";
import { setCart } from "../../features/store/slice";

export const ProductDetails = () => {
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();

  if (!id) return;
  const { data: product, isLoading, isSuccess, isError, error } = useGetProductQuery(id);
  const handleAddCart = () => dispatch(setCart(product!));

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="animate-spin rounded-full border-3 border-orange-400 border-t-white p-5 dark:border-[#1DB954] dark:border-t-[#2a2a2a]"></p>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <div className="mx-auto mt-10 flex max-w-4xl grid-cols-[1fr_1fr] flex-col items-center justify-center gap-5 md:grid md:justify-between md:gap-15">
        <div className="max-w-[400px] overflow-hidden rounded-4xl border-2 bg-white p-5">
          <img className="h-96 w-400 object-contain" src={product.image} alt={product.title} />
        </div>
        <div className="h-100% flex flex-col">
          <h3 className="mb-5 text-3xl">{product.title}</h3>
          <p className="mb-5">{product.category}</p>
          <p className="max-h-[150px] overflow-hidden overflow-y-auto">{product.description}</p>
          <button
            onClick={handleAddCart}
            className="mt-4 cursor-pointer rounded-2xl border-2 bg-orange-400 px-8 py-3 transition duration-300 ease-in-out hover:opacity-80 dark:bg-[#1DB954]"
            type="button"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
};
