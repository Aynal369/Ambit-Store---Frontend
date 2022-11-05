import React from "react";
import BillingDetails from "../containers/BillingDetails";
import OrderPreview from "../containers/OrderPreview";

const Checkout = () => {
  return (
    <div className="container-fluid">
      <div className="row my-4">
        <div className="col-md-8">
          <BillingDetails />
        </div>
        <div className="col-md-4">
          <OrderPreview />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
