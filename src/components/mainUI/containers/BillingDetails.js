import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useTools from "../../../hook/useTools";
import SendIcon from "@mui/icons-material/Send";

const BillingDetails = () => {
  const { isClick, setIsClick, buttonRefresh } = useTools();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setIsClick(true);

    buttonRefresh();
  };
  return (
    <div className="card p-2">
      <p className="display-6 opacity-50 text-center border-bottom">
        Add new product
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row justify-content-center g-4"
      >
        <div className="col-sm-10">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            {...register("title")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            {...register("description")}
          />
        </div>

        <div className="col-sm-10">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="discountPercentage">Discount Percentage</label>
          <input
            type="text"
            id="discountPercentage"
            className="form-control"
            {...register("discountPercentage")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            id="rating"
            className="form-control"
            {...register("rating")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="stock">Stock</label>
          <input
            type="text"
            id="stock"
            className="form-control"
            {...register("stock")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            className="form-control"
            {...register("brand")}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            className="form-control"
            {...register("category")}
          />
        </div>
        <div className="text-center">
          {isClick ? (
            <LoadingButton loading variant="contained">
              Submit
            </LoadingButton>
          ) : (
            <Button
              type="submit"
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
