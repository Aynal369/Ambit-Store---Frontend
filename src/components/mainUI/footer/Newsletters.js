import React from "react";

const Newsletters = () => {
  return (
    <section className="bg-primary">
      <div className="container-fluid">
        <div className="row justify-content-center p-4">
          <div className="col-sm-5 text-light">
            <h3>Sign Up For Newsletters</h3>
            <p>
              Get E-mail updates about our latest shop and
              <span className="text-warning fw-bold"> special offers.</span>
            </p>
          </div>
          <div className="col-sm-5 align-self-center">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <button
                type="button"
                className="btn btn-warning"
                id="btnGroupAddon"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;
