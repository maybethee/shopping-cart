import { useOutletContext } from "react-router-dom";

const Products = () => {
  const [itemQuantity, setItemQuantity] = useOutletContext();

  function handleQuantityIncrease() {
    setItemQuantity(itemQuantity + 1);
  }

  return (
    <>
      <div>
        <h1>This is the Shop Page</h1>
        <ul>
          <li>Product # 1</li>
          <li>Product # 2</li>
          <li>Product # 3</li>
        </ul>
        <button onClick={handleQuantityIncrease}>ADD TO CART</button>
      </div>
    </>
  );
};

export default Products;
