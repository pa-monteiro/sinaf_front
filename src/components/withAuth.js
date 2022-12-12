import React from "react";
import { redirect } from "react-router-dom";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      return redirect('/')
    }
  };

  return AuthRoute;
};

export default withAuth;