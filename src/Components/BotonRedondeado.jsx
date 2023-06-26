import React from 'react'
import PropTypes from 'prop-types'

const BotonRedondeado = ({texto,color,enlace}) => {
  return (
    <button
      className={`bg-${color} text-white py-2 px-4 rounded-full w-full font-bold `}
    >
      {texto}
    </button>
  );
}

BotonRedondeado.propTypes = {}

export default BotonRedondeado