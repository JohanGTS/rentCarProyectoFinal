import React from "react";
import PropTypes from "prop-types";

const Seccion = ({ color, children }) => {
    return <section className={`py-16 bg-${color}`}>{children}</section>;
};
Seccion.propTypes = {
  color: PropTypes.string,
};

export default Seccion;
