import React from "react";

const dashboardRoutes = [
  {
    path: "/",
    exact: true,
    layout: true,
    component: React.lazy(() => import("./../pages/Home")),
  },
];

export default dashboardRoutes;
