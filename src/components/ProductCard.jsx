import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ addToCart, productObject }) => {
  const [inputQuantity, setInputQuantity] = useState(1);

  function handleButtonClick(direction) {
    setInputQuantity((previous) => {
      if (direction === "descend" && previous > 1) {
        return previous - 1;
      } else if (direction === "ascend") {
        return previous + 1;
      }
      return previous;
    });
  }

  function handleInputChange(e) {
    const value = e.target.value;
    const numberValue = Number(value);

    if (!isNaN(numberValue) && numberValue >= 1) {
      setInputQuantity(numberValue);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.leftCol}>
        <img src={productObject.image} alt={productObject.title} />
      </div>

      <div className={styles.rightCol}>
        <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{productObject.title}</h3>
          <p className={styles.productDescription}>
            {productObject.description}
          </p>
        </div>
        <hr />
        <h5 className={styles.productPrice}>
          ${(+productObject.price).toFixed(2)}
        </h5>
        <div className={styles.quantityControl}>
          <div>
            <button onClick={() => handleButtonClick("descend")}>-</button>
            <input
              className={styles.input}
              type="text"
              onChange={handleInputChange}
              value={inputQuantity}
            />
            <button onClick={() => handleButtonClick("ascend")}>+</button>
          </div>
          <button
            className={styles.addToCart}
            onClick={() => {
              console.log(productObject.price);
              addToCart(productObject, inputQuantity);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
