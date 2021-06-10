import React, { Suspense } from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import DashboardLayout from "./layouts/DashboardLayout";

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Suspense fallback={<div>Loading</div>}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path}>
              {route.layout ? (
                <DashboardLayout>
                  <route.component />
                </DashboardLayout>
              ) : (
                <route.component />
              )}
            </Route>
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
