import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Inbox from "./Components/Inbox";
import { Outlet } from "react-router-dom";
import SendEmail from "./Components/SendEmail";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
        <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail />
      </div>
      </div>
    </>
  );
};

export default Layout;
