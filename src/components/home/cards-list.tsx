import { useGetProductsQuery } from "../../features/api/productsApi";
import { ProductCard } from "./product-card";

export const CardsList = () => {
  const { data: products = [], isLoading, isError, error, isSuccess } = useGetProductsQuery();

  let content: React.ReactNode;

  if (isLoading) {
    content = (
      <div className="fixed inset-0 flex items-center justify-center">
        <p className="animate-spin rounded-full border-3 border-orange-400 border-t-white p-5 dark:border-[#1DB954] dark:border-t-[#2a2a2a]"></p>
      </div>
    );
  } else if (isSuccess) {
    content = (
      <ul className="@container flex flex-wrap justify-center gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return content;
};
