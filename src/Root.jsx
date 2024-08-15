import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";
import "./App.css";

const Root = () => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <div>
      <Nav cartItems={itemQuantity} cartTotalAmount={cartTotal} />
      <Outlet
        context={{ itemQuantity, setItemQuantity, cartTotal, setCartTotal }}
      />
    </div>
  );
};

export default Root;
