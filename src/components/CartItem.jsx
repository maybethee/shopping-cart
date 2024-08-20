const CartItem = ({ cartItemObj, removeFromCart }) => {
  return (
    <div style={{ border: "solid 1px black", margin: "3rem" }}>
      <img src={cartItemObj.image} alt={cartItemObj.title} />
      <h4>{cartItemObj.title}</h4>
      <h4>Quantity: x{cartItemObj.quantity}</h4>
      <hr />
      <h5>
        ${(+cartItemObj.price * cartItemObj.quantity).toFixed(2)} ($
        {(+cartItemObj.price).toFixed(2)} each)
      </h5>

      {/* make this an icon  */}
      <button onClick={() => removeFromCart(cartItemObj.id)}>DELETE</button>
    </div>
  );
};

export default CartItem;
