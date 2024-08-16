import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

const Products = () => {
  const { products, addToCart } = useOutletContext();

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
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
