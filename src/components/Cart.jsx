import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const { cartItems, cartTotal, removeFromCart, itemQuantity } =
    useOutletContext();

  const pluralize = (count, noun, suffix = "s") =>
    `${count} ${noun}${count !== 1 ? suffix : ""}`;

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
      <div className={styles.wrapper}>
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
                      data-testid="cart-item"
                    />
                  </li>
                );
              })}
            </ul>
            <h3 className={styles.cartTotal}>
              Total: ${cartTotal} ({pluralize(itemQuantity, "item")})
            </h3>
            <button
              className={styles.checkout}
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
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
