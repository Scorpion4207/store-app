import { useSelectHook } from "../../features/store/slice";
import { ProductCart } from "./product-cart";

export const ProductListCart = () => {
  const { selectCart } = useSelectHook();
  const set = new Set();
  const newArrCart = selectCart.filter((product) => {
    if (!set.has(product.id)) {
      set.add(product.id);
      return product;
    } else {
      return false;
    }
  });

  return (
    <ul className="@container col-span-2 flex flex-col gap-5">
      {newArrCart
        .sort((a, b) => a.id - b.id)
        .map((product) => (
          <ProductCart key={product.id} {...product} />
        ))}
    </ul>
  );
};
