import React from "react";
import { Redirect, Route } from "react-router-dom";
import { LOGIN } from "../constants/routes";
import { useAuth } from "../context/AuthContext";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
