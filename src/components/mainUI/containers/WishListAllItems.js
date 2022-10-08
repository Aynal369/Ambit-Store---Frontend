import React from "react";
import { Button, IconButton } from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useSelector, useDispatch } from "react-redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { removeWishlist } from "../../../redux/features/wishlist/wishlistSlice";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const WishListAllItems = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const date = new Date("2020-07-22T13:22:10.2566789+00:00");
  const toDay = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const handleAddToCartAndRemove = (data) => {
    dispatch(addToCart(data));
    dispatch(removeWishlist(data));
  };
  return (
    <>
      {wishlist.wishlistItems.length > 0 ? (
        <>
          <div className="table-responsive">
            <table className="table align-middle text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Thumbnail</th>
                  <th scope="col">Product Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Added</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Add to cart</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {wishlist.wishlistItems.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <img
                        src={item.thumbnailURL}
                        alt={item.title}
                        width={60}
                        height={60}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{toDay}</td>
                    <td>{item.stock}</td>
                    <td>
                      <IconButton
                        onClick={() => handleAddToCartAndRemove(item)}
                      >
                        <AddShoppingCartIcon color="warning" />
                      </IconButton>
                    </td>
                    <td>
                      <IconButton
                        onClick={() => dispatch(removeWishlist(item))}
                      >
                        <DisabledByDefaultIcon color="error" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <Button
              variant="text"
              startIcon={<KeyboardBackspaceIcon />}
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </div>
        </>
      ) : (
        <div className="shadow p-4 text-center ">
          <h4>Shopping wishlist</h4>
          <p className="text-danger">Your wishlist is currently empty</p>
          <div className="text-center">
            <Button
              variant="text"
              startIcon={<KeyboardBackspaceIcon />}
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WishListAllItems;
