import React from "react";
import WishListAllItems from "../containers/WishListAllItems";

const WishList = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <WishListAllItems />
      </div>
    </div>
  );
};

export default WishList;
