import { Button, IconButton, Rating, Tooltip } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useDatabase from "../../../hook/useDatabase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { getProduct, loading, error } = useDatabase(
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

  if (loading) return <p>Loading</p>

  if (error) console.log(error);
  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center g-4">
        <div className="col-md-4">
          <figure>
            <img
              src={thumbnailURL}
              className="card-img-top"
              alt={title}
              height="194"
            />
          </figure>
        </div>
        <div className="col-md-6">
          <div className="card border-0 ms-5">
            <h3 className="text-capitalize">{title}</h3>
            <div className="d-flex text-muted">
              <h6>
                Brand: <span className="text-warning ms-2">{brand}</span>
              </h6>
              <h6 className="ms-4">
                Category: <span className="text-warning ms-2">{category}</span>
              </h6>
            </div>
            <p className="text-muted mt-3">{description}</p>
            <div className="d-flex">
              <h6 className="me-3 text-muted">Rating:</h6>
              <Rating
                name="half-rating-read"
                size="small"
                value={rating}
                precision={0.5}
                readOnly
              />
            </div>
            <h2>$ {price}</h2>
            <div className="pt-3 ms-4">
              <Button
                type="submit"
                variant="contained"
                color="warning"
                endIcon={<ShoppingCartIcon />}
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
