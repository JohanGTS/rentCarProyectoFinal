import React, { useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AdminHome } from "../Pages/AdminHome";
import { BarraLateral } from "../Components/BarraLateral";

const AdminRouter = () => {
  return (
    <div>
      <BarraLateral/>
    </div>
  );
};

export default AdminRouter;
