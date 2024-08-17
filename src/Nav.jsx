import { Link } from "react-router-dom";

const Nav = ({ cartItems, cartTotalAmount }) => {
  return (
    <div style={{ position: "sticky", top: "1rem", backgroundColor: "white" }}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Technology Shop</Link>
          </li>
          <li>
            {/* should be an icon i guess */}
            <Link to="/cart">Your Cart</Link>: {cartItems} in cart Total: $
            {cartTotalAmount}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
