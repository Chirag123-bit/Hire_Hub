import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/auth/login" state={{ path: location.pathname }} />;
  }
  return children;
};

export default RequireAuth;
