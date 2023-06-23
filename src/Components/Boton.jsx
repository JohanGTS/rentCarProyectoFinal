import React from "react";
import PropTypes from "prop-types";

const Boton = ({ color, texto, componente, onclick }) => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
        onClick={onclick}
      >
        <span
          className={`w-48 h-48 rounded rotate-[-40deg] bg-${color} absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0`}
          ></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
          {texto}
        </span>
      </button>
    </>
  );
};

Boton.propTypes = {};

export default Boton;
