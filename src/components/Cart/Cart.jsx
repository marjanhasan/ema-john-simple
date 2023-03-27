import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  // const cart = props.cart; option 1
  // const { cart } = props;  option 2
  // option 3 hoilo props er jaygay { cart } likhe dewa
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // if(product.quantity === 0){
    //   product.quantity = 1;
    // }
    product.quantity = product.quantity || 1;
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h4>order summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
    </div>
  );
};

export default Cart;
