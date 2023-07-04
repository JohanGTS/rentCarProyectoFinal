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
            <div className="flex gap-4 mt-4 ">
              <BotonRedondeado
                texto={"Envíanos un correo"}
                color={"gray-600"}
              />
              <BotonRedondeado
                texto={"Escríbenos"}
                color="gray-600"
                enlace="https://api.whatsapp.com/send/?phone=%2B18496383164&text&type=phone_number&app_absent=0"
              />
            </div>
          </div>
          <div className="lg:w-1/2 ">
            <img src={jeep} alt="carro durisimo" className="rounded-lg" />
          </div>
        </div>
      </Seccion>
      <Seccion color="white">
        <div className="  container mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2">
            <h2 className="lg:text-6xl font-bold text-4xl">
              Visítanos en Santiago
            </h2>
            <p className="text-lg  py-8">
              RR Rentals está presente en todo el país ofrecer el servicio en
              aereopuestos fuera de la provincia de Santiago de los caballeros.
            </p>
            <p className="text-lg">
              Vea todas nuestras otras ubicaciones con horarios de apertura e
              información de contacto a continuación.
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15048.654937947484!2d-70.6799079!3d19.4485062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cfe4627fa7ad%3A0xd5eca3cfd26ed3db!2sRR%20Rentals%20RD!5e0!3m2!1ses-419!2sdo!4v1688257787038!5m2!1ses-419!2sdo"
            width="600"
            height="450"
            className="rounded-lg"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Seccion>
    </main>
  );
};

Contacto.propTypes = {};

export default Contacto;
