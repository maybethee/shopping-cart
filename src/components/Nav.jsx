import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";
import { ShoppingBasket } from "lucide-react";

const Nav = ({ cartItems }) => {
  return (
    <div className={styles.navBar}>
      <nav>
        <ul>
          <li>
            <Link to="/" className="reactLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="reactLink">
              Technology
            </Link>
          </li>
          <li>
            {/* should be an icon i guess */}
            <Link to="/cart" className="reactLink">
              <div className={styles.cartIconContainer}>
                <ShoppingBasket size={40} strokeWidth={1.5} />
                {cartItems >= 1 && (
                  <div className={styles.cartItems}>{cartItems}</div>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
