import React from "react";
import PropTypes from "prop-types";
import BotonRedondeado from "../Components/BotonRedondeado";
import jeep from "../assets/jeep.jpg";
import Seccion from "../Components/Seccion";

const Contacto = () => {
  return (
    <main>
      <Seccion color="white">
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2">
            <h2 className="lg:text-6xl font-bold text-4xl">Contáctenos</h2>
            <p className="text-lg  py-8">
              Estamos disponibles para brindarte ayuda en caso de que tengas
              alguna pregunta o duda, ya sea relacionada con un vehículo en
              particular, conceptos sobre alquiler de vehículos,
              responsabilidades u otros temas. No dudes en ponerte en contacto
              con nosotros haciendo clic en el enlace a continuación. Estaremos
              encantados de asistirte en lo que necesites.
            </p>
            <div className="flex gap-4 mt-4">
              <BotonRedondeado
                texto={"Envíanos un correo"}
                color={"cyan-500"}
                enlace="un mailto"
              />
              <BotonRedondeado
                texto={"Escríbenos"}
                color="cyan-500"
                enlace="https://api.whatsapp.com/send/?phone=%2B18496383164&text&type=phone_number&app_absent=0"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={jeep} alt="carro durisimo" className="rounded-lg" />
          </div>
        </div>
      </Seccion>
      <Seccion color="white">
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2">
            <h2 className="lg:text-6xl font-bold text-4xl">Contáctenos</h2>
            <p className="text-lg  py-8">
              Estamos disponibles para brindarte ayuda en caso de que tengas
              alguna pregunta o duda, ya sea relacionada con un vehículo en
              particular, conceptos sobre alquiler de vehículos,
              responsabilidades u otros temas. No dudes en ponerte en contacto
              con nosotros haciendo clic en el enlace a continuación. Estaremos
              encantados de asistirte en lo que necesites.
            </p>
            <div className="flex gap-4 mt-4">
              <BotonRedondeado
                texto={"Envíanos un correo"}
                color={"cyan-500"}
                enlace="un mailto"
              />
              <BotonRedondeado
                texto={"Escríbenos"}
                color="cyan-500"
                enlace="https://api.whatsapp.com/send/?phone=%2B18496383164&text&type=phone_number&app_absent=0"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={jeep} alt="carro durisimo" className="rounded-lg" />
          </div>
        </div>
      </Seccion>
    </main>
  );
};

Contacto.propTypes = {};

export default Contacto;
