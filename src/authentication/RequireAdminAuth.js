import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequireAdminAuth = ({ children }) => {
  const { isLoading, isAdmin } = useAuth();

  let location = useLocation();
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default RequireAdminAuth;
