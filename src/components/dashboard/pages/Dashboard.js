import React from "react";
import { Outlet } from "react-router-dom";
import SideBarNav from "../containers/SideBarNav";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-2 p-0 bg-light">
          <SideBarNav />
        </div>
        <div className="col-10  border-start">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
