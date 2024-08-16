import { useState } from "react";

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
    <div style={{ border: "solid 1px black", margin: "3rem" }}>
      <img src={productObject.image} alt={productObject.title} />
      <h4>{productObject.title}</h4>
      <p>{productObject.description}</p>
      <hr />
      <h5>${(+productObject.price).toFixed(2)}</h5>
      <div>
        <button onClick={() => handleButtonClick("descend")}>-</button>
        <input
          type="text"
          style={{ width: "25px" }}
          onChange={handleInputChange}
          value={inputQuantity}
        />
        <button onClick={() => handleButtonClick("ascend")}>+</button>
      </div>
      <button
        onClick={() => {
          console.log(productObject.price);
          addToCart(productObject, inputQuantity);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
