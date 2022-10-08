import { Button, IconButton, Stack } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useDispatch, useSelector } from "react-redux";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeCart,
} from "../../../redux/features/cart/cartSlice";

const CartAllItems = () => {
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      {cart.cartItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table align-middle text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Product Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {cart.cartItems.map((item, index) => (
                <tr key={item._id}>
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
                  <td>${item.price}</td>
                  <td>
                    <Stack direction="row" spacing={1}>
                      <IconButton onClick={() => dispatch(decreaseCart(item))}>
                        <RemoveIcon />
                      </IconButton>
                      <div className="mt-2">
                        <h5>{item.cartQuantity}</h5>
                      </div>
                      {item.cartQuantity >= item.stock ? (
                        <IconButton disabled>
                          <AddIcon />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => dispatch(addToCart(item))}>
                          <AddIcon />
                        </IconButton>
                      )}
                    </Stack>
                  </td>
                  <td>${item.price * item.cartQuantity}</td>
                  <td>
                    <IconButton onClick={() => dispatch(removeCart(item))}>
                      <DisabledByDefaultIcon color="error" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-5">
            <div className="d-flex justify-content-between">
              <div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear car
                </Button>
              </div>
              <div>
                <div className="d-flex justify-content-around border-bottom">
                  <h5>Total quantity</h5>
                  <h5>{cartTotalQuantity}</h5>
                </div>
                <div className="d-flex justify-content-around border-bottom mt-3">
                  <h5>Total amount</h5>
                  <h5>${cartTotalAmount}</h5>
                </div>
                <p className="text-muted">
                  Taxes and shipping calculated at checkout
                </p>
                <Button variant="contained" fullWidth>
                  Check out
                </Button>
                <div className="text-center mt-3">
                  <Button
                    variant="text"
                    startIcon={<KeyboardBackspaceIcon />}
                    onClick={() => navigate("/products")}
                  >
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow p-4 text-center ">
          <h4>Shopping Cart</h4>
          <p className="text-danger">Your cart is currently empty</p>
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

export default CartAllItems;
