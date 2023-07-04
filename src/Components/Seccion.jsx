import React from "react";
import PropTypes from "prop-types";  
const Seccion = ({ color, children }) => {
  return (
    <section
      className={`py-16 bg-${color}  transition-all duration-500 ease-in-out animate-slide-down` }
    >
      {children}
    </section>
  );
};
Seccion.propTypes = {
  color: PropTypes.string,
};

export default Seccion;
