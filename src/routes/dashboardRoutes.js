import React from "react";

const dashboardRoutes = [
  {
    path: "/",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Home")),
  },
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
];

export default dashboardRoutes;
