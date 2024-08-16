import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart } = useOutletContext();

  return (
    <>
      <div>
        <h1>This is the Cart</h1>
        <ul>
          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  cartItemObj={item}
                  removeFromCart={removeFromCart}
                />
              );
            })}
          </div>
        </ul>
        <h3>Total: ${cartTotal} </h3>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
