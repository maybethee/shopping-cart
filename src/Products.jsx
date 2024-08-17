import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products, addToCart, loading, error } = useOutletContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <div>
        <h1>Here is the technology you can own if you pay us:</h1>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard
                  key={product.id}
                  productObject={product}
                  addToCart={addToCart}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Products;
