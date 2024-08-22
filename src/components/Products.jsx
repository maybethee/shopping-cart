import { useOutletContext } from "react-router-dom";
import ProductCard from "./ProductCard";
import styles from "../styles/Products.module.css";

const Products = () => {
  const { products, addToCart } = useOutletContext();

  return (
    <>
      <div className={styles.wrapper}>
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
