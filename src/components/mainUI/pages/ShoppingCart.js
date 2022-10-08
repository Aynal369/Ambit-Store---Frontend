import React from "react";
import CartAllItems from "../containers/CartAllItems";

const ShoppingCart = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <CartAllItems />
      </div>
    </div>
  );
};

export default ShoppingCart;
