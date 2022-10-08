import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const DynamicPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DynamicPage;
