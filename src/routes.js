/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import React from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import DashboardPage from "views/Dashboard/Dashboard.js";
import MicroFrontend from "./utils/MicroFrontend";

const MicroFrontendLayout = (props) => {
  return (
    <MicroFrontend
      name="microfrontend"
      host="https://microfrontend-react.herokuapp.com"
      {...props}
    />
  );
};

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/microfrontend",
    name: "Microfrontend",
    rtlName: "لوحة القيادة",
    icon: LibraryBooks,
    component: MicroFrontendLayout,
    layout: "/admin",
  },
];

export default dashboardRoutes;
