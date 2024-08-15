import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const Products = () => {
  // const [itemQuantity, setItemQuantity] = useOutletContext();

  // const [cartTotal, setCartTotal] = useOutletContext();

  const { itemQuantity, setItemQuantity, cartTotal, setCartTotal } =
    useOutletContext();

  const [products, setProducts] = useState([]);

  function handleQuantityIncrease(addedQuantity, price) {
    // console.log("price:", price);
    // console.log("addedquantity:", addedQuantity);
    // console.log("cart total:", cartTotal);
    setItemQuantity(itemQuantity + addedQuantity);
    setCartTotal((+cartTotal + price * addedQuantity).toFixed(2));
    // console.log("cart total:", cartTotal);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div>
        <h1>This is the Shop Page</h1>
        <div>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                productObject={product}
                handleQuantityIncrease={handleQuantityIncrease}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
