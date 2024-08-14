import { useState } from "react";

const ProductCard = ({ handleQuantityIncrease }) => {
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
      <div>img placeholder</div>
      <h4>Product Name</h4>
      <p>Product Description</p>
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
      <button onClick={() => handleQuantityIncrease(inputQuantity)}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
