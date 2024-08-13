import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

const Root = () => {
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div>
      <Nav cartItems={itemQuantity} />
      <Outlet context={[itemQuantity, setItemQuantity]} />
    </div>
  );
};

export default Root;
