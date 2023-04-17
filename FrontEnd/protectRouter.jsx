import { Navigate, Outlet } from "react-router-dom";
import React from "react";

function userAuth() {
  const user = sessionStorage.getItem("login");
  return user && user;
}

function ProtectedRouter() {
  const isAuth = userAuth();
  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default ProtectedRouter;
