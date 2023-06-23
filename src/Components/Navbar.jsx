import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import ItemNavbar from "./ItemNavbar";
import Boton from "./Boton";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import FormRegistro from "./FormRegistro";

const Navbar = () => {
  let [estado, setEstado] = useState(false);
  const campos = [
    {
      id: "email",
      label: "Email",
      tipo: "email",
      nombre: "email",
      placeholder: "Ingrese su email",
    },
    {
      id: "password",
      label: "Contraseña",
      tipo: "password",
      nombre: "password",
      placeholder: "Ingrese su contraseña",
    },
  ];
  return (
    <header className="header sticky top-0 bg-white shadow-md flex flex-wrap items-center justify-between px-8 ">
      <div className="w-full md:w-auto">
        <Logo />
      </div>
      <nav className="nav font-semibold text-lg flex-grow md:flex-grow-0">
        <ul className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base md:justify-center">
          <li className="md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full py-2 px-4">
                    <span className="text-lg font-semibold">Menú</span>
                    {open ? (
                      <ChevronUpIcon className="w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="py-2 px-4">
                    <div className="flex flex-col md:hidden">
                      <ItemNavbar texto={"Automóviles"} />
                      <ItemNavbar texto={"Sobre nosotros"} />
                      <ItemNavbar texto={"Informaciones legales"} />
                      <ItemNavbar texto={"Contacto"} />
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          <li className="hidden md:flex space-x-4">
            <ItemNavbar texto={"Automóviles"} />
            <ItemNavbar texto={"Sobre nosotros"} />
            <ItemNavbar texto={"Informaciones legales"} />
            <ItemNavbar texto={"Contacto"} />
          </li>
        </ul>
      </nav>

      <div className="flex justify-end md:justify-between">
        <Boton
          texto={"Iniciar sesión"}
          color={"red-600"}
          onclick={() => setEstado(true)}
        />
        <FormRegistro
          show={estado}
          onHide={() => setEstado(false)}
          campos={campos}
        />
      </div>
    </header>
  );
};

export default Navbar;
