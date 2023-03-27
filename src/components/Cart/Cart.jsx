import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart; option 1
  // const { cart } = props;  option 2
  // option 3 hoilo props er jaygay { cart } likhe dewa
  let total = 0;
  for (const prod of cart) {
    total += prod.price;
  }
  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: {total}</p>
      <p>Total Shipping: </p>
      <p>Tax: </p>
      <h6>Grand Total: </h6>
    </div>
  );
};

export default Cart;
