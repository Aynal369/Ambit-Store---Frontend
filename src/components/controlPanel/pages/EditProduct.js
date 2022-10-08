import LoadingButton from "@mui/lab/LoadingButton";
import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useDatabase from "../../../hook/useDatabase";
import useTools from "../../../hook/useTools";
import SendIcon from "@mui/icons-material/Send";

const EditProduct = () => {
  const { id } = useParams();
  const { getProduct, setGetProduct } = useDatabase(
    `http://localhost:5000/app/v1/product/${id}`
  );
  const {
    title,
    description,
    thumbnailURL,
    productImageURL,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
  } = getProduct;
  const { isClick, setIsClick, buttonRefresh } = useTools();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(true);
    axios
      .put(`http://localhost:5000/app/v1/product/${id}`, getProduct)
      .then((res) => {
        if (res.data.data.modifiedCount > 0) {
          toast.success("Successfully updated user");
          navigate("/control-panel/product-list");
        }
      })
      .catch((err) => console.log(err));
    buttonRefresh();
  };
  const handleInputChange = (e) => {
    setGetProduct({ ...getProduct, [e.target.id]: e.target.value });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 p-0">
          <div className="card border-0 shadow p-2">
            <p className="display-6 opacity-50 text-center border-bottom">
              Add new product
            </p>
            <form
              onSubmit={handleSubmit}
              className="row justify-content-center g-4"
            >
              <div className="col-sm-10">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  className="form-control"
                  value={title || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  className="form-control"
                  value={description || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="thumbnailURL">thumbnail</label>
                <input
                  type="text"
                  id="thumbnailURL"
                  className="form-control"
                  value={thumbnailURL || ""}
                  disabled
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="productImageURL">Images</label>
                <input
                  type="text"
                  id="productImageURL"
                  className="form-control"
                  value={productImageURL || ""}
                  disabled
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  id="price"
                  className="form-control"
                  value={price || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="discountPercentage">Discount Percentage</label>
                <input
                  type="text"
                  id="discountPercentage"
                  className="form-control"
                  value={discountPercentage || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="rating">Rating</label>
                <input
                  type="text"
                  id="rating"
                  className="form-control"
                  value={rating || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="stock">Stock</label>
                <input
                  type="text"
                  id="stock"
                  className="form-control"
                  value={stock || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  id="brand"
                  className="form-control"
                  value={brand || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-10">
                <label htmlFor="category">Category</label>
                <input
                  type="text"
                  id="category"
                  className="form-control"
                  value={category || ""}
                  onChange={handleInputChange}
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
                    Update now
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
