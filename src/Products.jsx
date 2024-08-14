import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const [itemQuantity, setItemQuantity] = useOutletContext();

  function handleQuantityIncrease(addedQuantity) {
    setItemQuantity(itemQuantity + addedQuantity);
  }

  return (
    <>
      <div>
        <h1>This is the Shop Page</h1>
        <div>
          <ProductCard handleQuantityIncrease={handleQuantityIncrease} />
          <ProductCard handleQuantityIncrease={handleQuantityIncrease} />
          <ProductCard handleQuantityIncrease={handleQuantityIncrease} />
        </div>
      </div>
    </>
  );
};

export default Products;
