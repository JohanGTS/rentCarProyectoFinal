import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import ItemNavbar from "./ItemNavbar";
import Boton from "./Boton";
import LoginPopUp from "./ComponentsEspecificos/LoginPopUp";
import { UserContext } from "../Contexts/UserContext";
import RegisterPopUp from "./ComponentsEspecificos/RegisterPopUp";
const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const [usuario, setUsuario] = useContext(UserContext);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setUsuario({ email, password });
    form.reset();
    () => setEstado(false);
  };
  let [estado, setEstado] = useState(false);
  let [estado2, setEstado2] = useState(false);
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
    <header className="header sticky top-0 bg-white shadow-md flex flex-wrap items-center justify-between px-8  z-10">
      <div className="w-full md:w-auto">
        <Logo />
      </div>
      <nav className="nav font-semibold text-lg flex-grow md:flex-grow-0">
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:justify-center">
          <ul className="hidden md:flex space-x-4">
            <ItemNavbar texto={"Automóviles"} to={"/home"} />
            <ItemNavbar texto={"Sobre nosotros"} to={"/nosotros"} />
            <ItemNavbar texto={"Términos y condiciones"} to={"/terminos"} />
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
        <LoginPopUp show={estado} onHide={() => setEstado(false)} />
      </div>

      <div className="flex justify-end md:justify-between">
        <Boton
          texto={"Registro"}
          color={"red-600"}
          onclick={() => setEstado2(true)}
        />
        <RegisterPopUp show={estado2} onHide={() => setEstado2(false)} />
      </div>
    </header>
  );
};

export default Navbar;
