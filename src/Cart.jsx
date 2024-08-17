import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart } = useOutletContext();

  const handleCheckout = () => {
    alert(
      "Your order is being processed, confirmation email has been sent. Thank you for shopping!"
    );
    cartItems.forEach((item) => {
      removeFromCart(item.id);
    });
  };

  return (
    <>
      <div>
        <h1>Cart</h1>
        {console.log(cartItems)}
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    <CartItem
                      key={item.id}
                      cartItemObj={item}
                      removeFromCart={removeFromCart}
                    />
                  </li>
                );
              })}
            </ul>
            <h3>Total: ${cartTotal} </h3>
            <button onClick={() => handleCheckout()}>Checkout</button>
          </div>
        ) : (
          <h3>
            Your cart is empty. Add items from{" "}
            <Link to="/products">our shop</Link>.
          </h3>
        )}
      </div>
    </>
  );
};

export default Cart;
