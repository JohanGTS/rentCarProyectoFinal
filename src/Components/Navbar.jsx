import React, { useState } from "react";
import Logo from "./Logo";
import ItemNavbar from "./ItemNavbar";
import Boton from "./Boton";
import PopUp from "./PopUp";

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  let [estado, setEstado] = useState(false);
  const campos = [
    {
      id: "email",
      label: "Email",
      tipo: "email",
      nombre: "email",
      placeholder: "Ingrese su email",
      required: true,
    },
    {
      id: "password",
      label: "Contraseña",
      tipo: "password",
      nombre: "password",
      placeholder: "Ingrese su contraseña",
      required: true,
    },
  ];
  return (
    <header className="header sticky top-0 bg-white shadow-md flex flex-wrap items-center justify-between px-8 ">
      <div className="w-full md:w-auto">
        <Logo />
      </div>
      <nav className="nav font-semibold text-lg flex-grow md:flex-grow-0">
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:justify-center">
          <ul className="hidden md:flex space-x-4">
            <ItemNavbar texto={"Automóviles"} to={"/"} />
            <ItemNavbar texto={"Sobre nosotros"} to={"/nosotros"} />
            <ItemNavbar texto={"Informaciones legales"} to={"/"} />
            <ItemNavbar texto={"Contacto"} to={"/contacto"} />
          </ul>
        </ul>
      </nav>

      <div className="flex justify-end md:justify-between">
        <Boton
          texto={"Iniciar sesión"}
          color={"red-600"}
          onclick={() => setEstado(true)}
        />
        <PopUp
          show={estado}
          onHide={() => setEstado(false)}
          titulo={"Iniciar sesión"}
          campos={campos}
          handleSubmit={handleSubmit}
        />
      </div>
    </header>
  );
};

export default Navbar;
