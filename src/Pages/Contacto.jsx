import React from "react";
import PropTypes from "prop-types";
import BotonRedondeado from "../Components/BotonRedondeado";

const Contacto = (props) => {
  return (
    <main>
      <section>
        <h3>Arrendamiento de vehículos seleccionados</h3>
        <div>
          <h2>Contáctenos</h2>
          <p>
            Estamos disponibles para brindarte ayuda en caso de que tengas
            alguna pregunta o duda, ya sea relacionada con un vehículo en
            particular, conceptos sobre alquiler de vehículos, responsabilidades
            u otros temas. No dudes en ponerte en contacto con nosotros haciendo
            clic en el enlace a continuación. Estaremos encantados de asistirte
            en lo que necesites
          </p>
          <div className="vanJuntos">
            <BotonRedondeado
              texto={"Envíanos un correo"}
              color={"yellow-400"}
              enlace="un mailto"
            />
            <BotonRedondeado
              texto={"Escríbenos"}
              color={"yellow-400"}
              enlace="https://api.whatsapp.com/send/?phone=%2B18496383164&text&type=phone_number&app_absent=0"
            />
          </div>
        </div>
      </section>

      <section>
        <h2>Visítanos en Santiago</h2>
        <p>
            RR Rental a Car es un negocio con ubicación en Reparto los García en donde siempre
            se está listo para ayudarlo en la búsqueda del vehículo para la moyr comodidad para su estancia 
            y uso.
        </p>
        <p>Vea nuestra ubicación con horario de apertura a continuación</p>
        <p>¡Las entregas las hacemos sin importar la hora!</p>
      </section>

        <div>
            <img src="" alt="carro durisimo" />
        </div>
      El mapa


    </main>
  );
};

Contacto.propTypes = {};

export default Contacto;
