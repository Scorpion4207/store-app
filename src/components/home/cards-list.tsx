import { useGetProductsQuery } from "../../features/api/productsApi";
import { ProductCard } from "./product-card";

export const CardsList = () => {
  const { data: products = [], isLoading, isError, error, isSuccess } = useGetProductsQuery();

  let content: React.ReactNode;

  if (isLoading) {
    content = "Loading...";
  } else if (isSuccess) {
    content = (
      <ul className="flex flex-wrap justify-center gap-4">
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
