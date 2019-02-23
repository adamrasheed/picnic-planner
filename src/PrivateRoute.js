import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  return <Route {...rest} />;
};

export default PrivateRoute;
