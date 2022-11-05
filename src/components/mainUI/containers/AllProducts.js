import { IconButton, Rating, Stack, Tooltip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useDatabase from "../../../hook/useDatabase";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import LatestProductPH from "../placeholders/LatestProductPH";

const AllProducts = () => {
  const { allProducts, loading, error } = useDatabase(
    "http://localhost:5000/app/v1/products"
  );
  const dispatch = useDispatch();

  if (loading) return <LatestProductPH />;

  if (error) console.log(error);

  return (
    <div className="container py-4">
      <div className="row g-4">
        {allProducts.map((data) => (
          <div className="col-sm-3" key={data._id}>
            <div className="card border-0 h-100 product_card">
              <Link to={`/products-details/${data._id}`}>
                <figure>
                  <img
                    src={data.thumbnailURL}
                    className="card-img-top"
                    alt={data.title}
                    height="194"
                  />
                </figure>
              </Link>
              <div className="card-body">
                <h5 className="card-title text-capitalize">{data.title}</h5>
                <Rating
                  name="half-rating-read"
                  size="small"
                  value={data.rating}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <h4>$ {data.price}</h4>
                  <Stack spacing={3} direction="row">
                    <Tooltip title="add to wishlist" placement="top">
                      <IconButton
                        size="small"
                        onClick={() => dispatch(addToWishlist(data))}
                      >
                        <FavoriteBorderIcon color="warning" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="add to cart" placement="top">
                      <IconButton
                        size="small"
                        onClick={() => dispatch(addToCart(data))}
                      >
                        <AddShoppingCartIcon color="warning" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
