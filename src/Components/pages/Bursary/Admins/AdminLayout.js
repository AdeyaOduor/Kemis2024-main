import React from "react";
import { Outlet } from "react-router";
import { styled } from "@material-ui/core";
import BNavbar from "../BNavBar";
import AdminSidebar from "./AdminSidebar";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100%",
  overflow: "hidden",
  width: "100%",
}));

const MainLayoutWrapper = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const MainLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
});

const MainLayoutContent = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto",
});

const AdminLayout = () => (
  <MainLayoutRoot>
    <AdminSidebar />
    <MainLayoutWrapper>
      <MainLayoutContainer>
        <MainLayoutContent>
          <BNavbar />
          <Outlet />
        </MainLayoutContent>
      </MainLayoutContainer>
    </MainLayoutWrapper>
  </MainLayoutRoot>
);

export default AdminLayout;
