import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, exact, path, auth, ...rest }) => (
  <Route
    exact={exact}
    path={path}
    render={() =>
      auth === true ? <Component {...rest} /> : <Redirect to="/login" />
    }
  />
);

export default PrivateRoute;
