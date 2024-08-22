import { Trash2 } from "lucide-react";
import styles from "../styles/CartItem.module.css";

const CartItem = ({ cartItemObj, removeFromCart }) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftCol}>
        <img src={cartItemObj.image} alt={cartItemObj.title} />
      </div>

      <div className={styles.rightCol}>
        <h4 className={styles.itemTitle}>{cartItemObj.title}</h4>
        <h4 className={styles.itemQuantity}>
          Quantity: x{cartItemObj.quantity}
        </h4>
        <hr />

        <div className={styles.priceRow}>
          <h5 className={styles.itemTotal}>
            ${(+cartItemObj.price * cartItemObj.quantity).toFixed(2)} ($
            {(+cartItemObj.price).toFixed(2)} each)
          </h5>

          {/* make this an icon  */}
          <button
            className={styles.deleteBtn}
            onClick={() => removeFromCart(cartItemObj.id)}
          >
            <Trash2 size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
