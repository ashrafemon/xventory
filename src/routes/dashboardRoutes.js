import React from "react";

const dashboardRoutes = [
  {
    path: "/",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Home")),
  },
  // Division Routes
  {
    path: "/divisions",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Divisions/Divisions")),
  },
  {
    path: "/divisions/create",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Divisions/CreateDivision")),
  },
  {
    path: "/divisions/:id",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Divisions/EditDivision")),
  },

  // District Routes
  {
    path: "/districts",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Districts/Districts")),
  },
  {
    path: "/districts/create",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Districts/CreateDistrict")),
  },
  {
    path: "/districts/:id",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Districts/EditDistrict")),
  },

  // Staff Routes
  {
    path: "/staffs/create",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Staffs/CreateStaff")),
  },
];

export default dashboardRoutes;
