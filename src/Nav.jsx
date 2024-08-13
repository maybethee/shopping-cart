import { Link } from "react-router-dom";

const Nav = ({ cartItems }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/products">Shop page</Link>
          </li>
          <li>
            <Link to="/cart">Your Cart</Link>: {cartItems} in cart
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
