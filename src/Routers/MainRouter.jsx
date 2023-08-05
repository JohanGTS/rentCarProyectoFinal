import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
  const [userContextLoaded, setUserContextLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(
      userContext.usuario !== null &&
        userContext.usuario !== undefined &&
        userContext.usuario !== "null"
    );

    if (isAuthenticated && !userContext.usuario?.Correo_ter) {
      // Esperar a que el usuario tenga el correo (puedes ajustar el criterio de espera según tus necesidades)
      const interval = setInterval(() => {
        if (userContext.usuario?.Correo_ter) {
          // Usuario tiene el correo, establecer el estado para indicar que el contexto está cargado
          setUserContextLoaded(true);
          clearInterval(interval); // Detener el intervalo
        }
      }, 100); // Intervalo de verificación cada 100ms (puedes ajustar esto si es necesario)
    } else {
      // Si el usuario no está autenticado o ya tiene el correo, establecer el estado para indicar que el contexto está cargado
      setUserContextLoaded(true);
    }
  }, [userContext, isAuthenticated]);

  // Si el contexto del usuario aún se está cargando, mostrar un componente de carga
  if (!userContextLoaded) {
    return <div>Cargando...</div>;
  }

  // Renderizar el contenido basado en la ruta actual
  return (
    <>
      {isAuthenticated ? (
        <>
          {userContext.usuario?.idTipoUsuario_usu === 1 ? (
            <BarraLateral />
          ) : (
            <BarraLateralUsuario />
          )}
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<SobreNosotros />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            {/* La siguiente ruta renderizará ErrorPage solo cuando ninguna de las rutas anteriores coincida */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default MainRouter;
