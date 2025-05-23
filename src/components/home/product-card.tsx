import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductProps) => {
  const navigation = useNavigate();

  const handleClickDetails = () => {
    navigation(`/details/${product.id}`);
  };

  return (
    <li className="max-w-[300px] rounded-xl border-black p-3 shadow-md">
      <img
        onClick={handleClickDetails}
        src={product.image}
        width={300}
        height={300}
        alt={product.title}
        title={product.title}
      />
      <h4 onClick={handleClickDetails}>{product.title}</h4>
      <p>{product.price}</p>
    </li>
  );
};
