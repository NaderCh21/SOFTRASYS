// src/components/Layout.js

import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
