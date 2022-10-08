import React from "react";
import PanelSideBar from "../containers/PanelSideBar";
import { Outlet } from "react-router-dom";

const ControlPanel = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row min-vh-100">
        <div className="col-2 p-0 bg-dark">
          <PanelSideBar />
        </div>
        <div className="col-10 bg-light border-start">
          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
