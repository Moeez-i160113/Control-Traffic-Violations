import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";


export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  // window.alert(auth.isAuthenticated())
  return (
    <Route
      {...rest}
      render={ (props) => {
        //   window.alert("Props: " + rest[0] + props[1])
        if (auth.isAuthenticated()) {
          return <Component {...props} {...rest} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
