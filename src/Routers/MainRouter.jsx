import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AdminHome } from "../Pages/AdminHome";
import Footer from "../Components/Footer";
import { BarraLateral } from "../Components/BarraLateral";
import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";
import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
const MainRouter = () => {
  const userContext = useContext(UserContext);

  // Función para verificar si el usuario está autenticado
  const isUserAuthenticated = () => {
    // Verifica si el contexto del usuario no es nulo o undefined
    
    return userContext !== null && userContext !== undefined;
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
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRouter;
