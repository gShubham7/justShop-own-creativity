import { HStack } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import sidebar_menu from "../constants/sidebar-menu";
import SideBar from "./admin/Sidebar";

const AdminLayout = () => {
  return (
    <HStack>
      <SideBar menu={sidebar_menu} />
      <Outlet />
    </HStack>
  );
};

export default AdminLayout;
