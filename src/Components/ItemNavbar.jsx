import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const ItemNavbar = ({ texto, to }) => {
  const estilo =
    "p-4 border-b-2 border-red-600 border-opacity-0 hover:border-opacity-100 hover:text-red-600 duration-200 cursor-pointer";
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `text-red-600 ${estilo}` : `${estilo}`)}
    >
      {texto}
    </NavLink>
  );
};

ItemNavbar.propTypes = {
  texto: PropTypes.string,
};

export default ItemNavbar;
