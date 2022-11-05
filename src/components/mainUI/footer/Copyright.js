import React from "react";
import { Link } from "react-router-dom";
import payment from "../../../images/payment.png";

const Copyright = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center border-top bg-light">
      <div className="text-sm-center py-3">
        <small>
          Copyright &copy; {new Date().getFullYear()}
          <Link to="/" style={{ textDecoration: "none" }}>
            <span> ambitstore.com </span>
          </Link>
          . All Rights Reserved
        </small>
      </div>
      <img src={payment} alt="payment" className="img-fluid" />
    </div>
  );
};

export default Copyright;
