import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { BarraLateral } from "../Components/BarraLateral";
import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";
import { UserContext } from "../Contexts/UserContext";
import ErrorPage from "../Pages/ErrorPage";
import TerminosCondiciones from "../Pages/TerminosCondiciones";
import { BarraLateralUsuario } from "../Components/BarraLateralUsuario";

const MainRouter = () => {
  const userContext = useContext(UserContext);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(
      userContext.usuario !== null &&
      userContext.usuario !== undefined &&
      userContext.usuario !== "null"
    );
    console.log("Aut: " + isAuthenticated);
    console.log(userContext)
  }, [userContext]);

  return (
    <>
      {isAuthenticated ? (
        <>
          {userContext.usuario?.rol === 1 ? <BarraLateral /> : <BarraLateralUsuario />}
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<SobreNosotros />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRouter;
