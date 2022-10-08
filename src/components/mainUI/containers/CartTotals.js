import React from "react";

const CartTotals = () => {
  return (
    <div className="card">
      <h4>Cart Total</h4>
      <div className="d-flex">
        <h6>Subtotal</h6>
        <h6>${}</h6>
      </div>
    </div>
  );
};

export default CartTotals;
