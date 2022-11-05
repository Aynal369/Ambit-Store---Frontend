import React from "react";
import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Person3Icon from "@mui/icons-material/Person3";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import UserProfile from "./UserProfile";
import useAuth from "../../../hook/useAuth";
import { useSelector } from "react-redux";

const CartArea = () => {
  const { users, isAdmin } = useAuth();

  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <Stack direction="row" spacing={2}>
      <Tooltip title="Wishlist" arrow>
        <IconButton onClick={() => navigate("/wish-list")}>
          <Badge badgeContent={wishlist.wishlistItems.length} color="primary">
            {wishlist.wishlistItems.length > 0 ? (
              <FavoriteIcon color="warning" />
            ) : (
              <FavoriteBorderIcon color="warning" />
            )}
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Cart" arrow>
        <IconButton onClick={() => navigate("/shopping-cart")}>
          <Badge badgeContent={cart.cartItems.length} color="primary">
            {cart.cartItems.length > 0 ? (
              <ShoppingCartIcon color="warning" />
            ) : (
              <AddShoppingCartIcon color="warning" />
            )}
          </Badge>
        </IconButton>
      </Tooltip>
      {users.email ? (
        <UserProfile />
      ) : (
        <>
          <Tooltip title="Login/Register" arrow>
            <IconButton onClick={() => navigate("/login")}>
              <Person3Icon color="primary" />
            </IconButton>
          </Tooltip>
        </>
      )}
      {isAdmin && (
        <Tooltip title="Admin Panel" arrow>
          <IconButton
            color="primary"
            onClick={() => navigate("/control-panel")}
          >
            <AdminPanelSettingsIcon />
          </IconButton>
        </Tooltip>
      )}
    </Stack>
  );
};

export default CartArea;
