import React from "react";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../../hook/useAuth";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import BallotIcon from "@mui/icons-material/Ballot";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const panelData = [
  {
    id: "01",
    title: "Home",
    urlLink: "/",
    titleIcon: HomeIcon,
    bgColor: "bg-primary",
  },
  {
    id: "02",
    title: "Control Panel",
    urlLink: "/control-panel",
    titleIcon: AdminPanelSettingsIcon,
    bgColor: "bg-primary",
  },
  {
    id: "03",
    title: "Dashboard",
    urlLink: "/dashboard",
    titleIcon: DashboardIcon,
    bgColor: "bg-primary",
  },
  {
    id: "04",
    title: "Add Product",
    urlLink: "/control-panel/add-product",
    titleIcon: AddIcon,
    bgColor: "bg-primary",
  },
  {
    id: "05",
    title: "Product List",
    urlLink: "/control-panel/product-list",
    titleIcon: BallotIcon,
    bgColor: "bg-primary",
  },
  {
    id: "06",
    title: "User List",
    urlLink: "/control-panel/user-list",
    titleIcon: ListAltIcon,
    bgColor: "bg-primary",
  },
  {
    id: "07",
    title: "Make User",
    urlLink: "/control-panel/make-user",
    titleIcon: PersonIcon,
    bgColor: "bg-primary",
  },
  {
    id: "08",
    title: "Make Admin",
    urlLink: "/control-panel/make-admin",
    titleIcon: ManageAccountsIcon,
    bgColor: "bg-primary",
  },
];

const PanelSideBar = () => {
  const { handleSignOut } = useAuth();
  return (
    <div className="my-4">
      <ul className="navbar-nav flex-column">
        {panelData.map((data) => (
          <li className={`nav-item mb-4 ${data.bgColor} dsn`} key={data.id}>
            <NavLink className="nav-link" to={data.urlLink}>
              <div className="d-flex align-items-center px-1">
                <div className="text-light me-3 opacity-50">
                  {<data.titleIcon />}
                </div>
                <div className="d-none d-md-block">
                  <span className="text-light">{data.title}</span>
                </div>
                <div className="text-light ms-auto opacity-25">
                  <ArrowRightIcon />
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="text-end">
        <Button
          variant="outlined"
          color="error"
          endIcon={<LogoutIcon />}
          onClick={handleSignOut}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default PanelSideBar;
