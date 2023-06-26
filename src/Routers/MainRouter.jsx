import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";

import Footer from "../Components/Footer";

import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto";
import SobreNosotros from "../Pages/SobreNosotros";
const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<SobreNosotros />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRouter;
