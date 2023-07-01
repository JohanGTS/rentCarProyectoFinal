import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AdminHome } from "../Pages/AdminHome";
import Footer from "../Components/Footer";
import { BarraLateral } from "../Components/BarraLateral";
import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";
import { useContext, useEffect } from "react";
import { UserContext } from "../Contexts/UserContext";
import ErrorPage from "../Pages/ErrorPage";
const MainRouter = () => {
  const userContext = useContext(UserContext);

  const isUserAuthenticated = () => {
    return false;
    return (
      userContext !== null && userContext !== undefined && userContext != ""
    );
  };

  return (
    <>
      {isUserAuthenticated() ? (
        <>
          <BarraLateral />
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<SobreNosotros />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRouter;
