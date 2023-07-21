import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export const NecesitaAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to={"/contacto"} state={{ from: location }} replace />
  );
};
