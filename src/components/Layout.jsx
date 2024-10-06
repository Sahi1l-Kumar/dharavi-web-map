import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="app-container">
      <Sidebar setDrawerOpen={setDrawerOpen} /> {/* Sidebar for navigation */}
      <div
        className={`main-content`}
        style={{
          marginLeft: drawerOpen ? "240px" : "0",
          transition: "margin 0.3s ease",
        }}
      >
        <Outlet /> {/* This will render the current route's component */}
      </div>
    </div>
  );
};

export default Layout;
