import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const UserLayout = () => {
  return (
    <div id="wrapper" style={{ overflow: "auto" }}>
      <header>
        <Header />
      </header>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default UserLayout;
