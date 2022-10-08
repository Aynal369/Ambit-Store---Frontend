import React from "react";
import { Link } from "react-router-dom";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Button } from "@mui/material";
import useAuth from "../../../hook/useAuth";
import userPic from "../../../images/user.png";

const UserProfile = () => {
  const { handleSignOut } = useAuth();
  return (
    <div className="mt-2">
      <ul className="list-unstyled m-0">
        <li className="nav-item dropdown me-3">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={userPic}
              alt="avatar"
              width="32"
              height="32"
              className="rounded-circle me-1 border border-3"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end mt-3 border-0 shadow text-center bg-light"
            aria-labelledby="navbarDropdown"
          >
            <li className="border py-3">
              <Link className="dropdown-item" to="/dashboard">
                <ManageAccountsIcon fontSize="small" />
                <span className="ms-2">My profile</span>
              </Link>
            </li>
            <li className="py-3">
              <Button onClick={handleSignOut} variant="contained" color="error">
                Sign Out
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
