import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const Products = () => {
  const [itemQuantity, setItemQuantity] = useOutletContext();

  function handleQuantityIncrease(addedQuantity) {
    setItemQuantity(itemQuantity + addedQuantity);
  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(data); // Log the fetched data here
      });
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
