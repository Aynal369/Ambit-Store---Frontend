import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCart } from "../../../redux/features/cart/cartSlice";

const OrderPreview = () => {
  const [agree, setAgree] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleCheckout = () => {
    dispatch(clearCart());
    Swal.fire("Congratulations!", "Your order success", "error");
  };

  return (
    <div className="card p-2">
      <h5 className="text-center">YOUR ORDER</h5>
      <hr />
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cart.cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td className="text-end">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Subtotal</h6>
        <h6>${cartTotalAmount}</h6>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Shipping</h6>
        <div>
          <p>Free shipping</p>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Total</h6>
        <h6>${cartTotalAmount}</h6>
      </div>
      <hr />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="defaultCheck1"
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          Direct bank transfer
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="defaultCheck2"
        />
        <label className="form-check-label" htmlFor="defaultCheck2">
          Check payments
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="defaultCheck3"
        />
        <label className="form-check-label" htmlFor="defaultCheck3">
          Cash on delivery
        </label>
      </div>
      <p className="my-3 text-muted">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </p>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="agree"
          onChange={() => setAgree((value) => !value)}
        />
        <label className="form-check-label" htmlFor="agree">
          I agree with the terms and conditions
        </label>
      </div>
      {agree ? (
        <Button variant="contained" fullWidth onClick={() => handleCheckout}>
          Check out
        </Button>
      ) : (
        <Button variant="contained" fullWidth disabled>
          Check out
        </Button>
      )}
    </div>
  );
};

export default OrderPreview;
