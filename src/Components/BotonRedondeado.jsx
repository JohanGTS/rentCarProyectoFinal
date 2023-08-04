import React from "react";

const BotonRedondeado = ({ texto, color, enlace }) => {
  const visitPage = () => {
    window.open(enlace, "_blank");
  };
  const sendEmail = () => {
    const mailtoLink = `mailto:quitomiguel56`;
    window.location.href = mailtoLink;
  };
  return (
    <button
      onClick={enlace ? visitPage : sendEmail}
      className={`bg-gray-600 text-white py-2 px-4 rounded-full w-full font-bold `}
    >
      {texto}
    </button>
  );
};

export default BotonRedondeado;
