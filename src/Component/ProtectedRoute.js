import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ component: Component, isAuth: isAuth, signOutProses: signOutProses, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component signOutProses={signOutProses}/>;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
