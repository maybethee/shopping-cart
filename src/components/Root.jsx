import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import "../styles/global.css";

const Root = () => {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
    setItemQuantity((prevQuantity) => prevQuantity + quantity);
    setCartTotal((prevTotal) =>
      (+prevTotal + product.price * quantity).toFixed(2)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const toRemove = prevItems.find((item) => item.id === productId);

      if (toRemove) {
        const updatedCartItems = prevItems.filter(
          (item) => item.id !== productId
        );
        setItemQuantity((prevQuantity) => prevQuantity - toRemove.quantity);
        setCartTotal((prevTotal) =>
          (prevTotal - toRemove.price * toRemove.quantity).toFixed(2)
        );
        return updatedCartItems;
      }
      return prevItems;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <div className="pageWrapper">
      <Nav cartItems={itemQuantity} cartTotalAmount={cartTotal} />
      <Outlet
        context={{
          products,
          loading,
          error,
          itemQuantity,
          setItemQuantity,
          cartTotal,
          setCartTotal,
          cartItems,
          addToCart,
          removeFromCart,
        }}
      />
    </div>
  );
};

export default Root;
