import React from "react";
import PropTypes from "prop-types";
import BotonRedondeado from "../Components/BotonRedondeado";
import vista from "../assets/rrrental.jpg";
import frontal from "../assets/localFrontal.jpg";
import Seccion from "../Components/Seccion";
const SobreNosotros = () => {
  return (
    <>
      <Seccion color="white">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:gap-4">
          <div className="lg:w-2/5 flex justify-center items-center">
            <img
              src={vista}
              alt="Vista del local parcial"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-4 lg:w-3/5">
            <h2 className="lg:text-5xl font-bold text-4xl">Sobre nosotros</h2>
            <p className="text-lg  py-8">
              Estamos disponibles para brindarte ayuda en caso de que tengas
              alguna pregunta o duda, ya sea relacionada con un vehículo en
              particular, conceptos sobre alquiler de vehículos,
              responsabilidades u otros temas. No dudes en ponerte en contacto
              con nosotros haciendo clic en el enlace a continuación. Estaremos
              encantados de asistirte en lo que necesites.
            </p>
            <p className="text-lg">
              RR Rentals tiene bastante experiencia en el arrendamiento de autos
              deportivos y autos en el segmento premium y de lujo. Con gran
              pasión, conocimiento y una red internacional, RR Rentals ayuda al
              cliente a alcanzar su objetivo en la búsqueda del coche soñado.
            </p>

            <p className="text-lg">
              RR Rentals tiene su sede en Santiago de los Caballeros, en donde
              las cosas se han movido rápidamente, y Selected Car Leasing se ha
              expandido desde entonces y hoy está en un lugar reconocido a nivel
              provincial.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion color="white">
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-3/5">
            <h2 className="lg:text-5xl font-bold text-4xl">
              Más que una empresa de renta de vehículos
            </h2>
            <p className="text-lg  py-8">
              Como una de las principales empresas de renta de vehículos, RR
              Rentals garantiza un acuerdo transparente en condiciones
              atractivas.
            </p>
            <p className="text-lg">
              Sin embargo, en RR Rentals, usted se convierte en algo más que un
              cliente con un contrato de arrendamiento. CLos clientes
              experimentan el apasionado universo automotriz de todo el grupo,
              así como las sinergias internas que unen las actividades de
              arrendamiento profesional junto con fantásticos vehículos.
            </p>
          </div>
          <div className="lg:w-2/5 flex justify-center items-center">
            <img
              src={frontal}
              alt="Vista del local parcial"
              className="rounded-lg"
            />
          </div>
        </div>
      </Seccion>

      <Seccion color={"white"}>
        {/*Estos css están dando problemas en la parte de responsive */}
        <div className="mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2 w-full container ">
            <h2 className="lg:text-lg font-bold text-4xl mb-2 mx-3">
              Un servicio impulsado por la calidad y satisfacción
            </h2>
            <div className="flex  flex-row md:flex-row mb-2">
              <div>
                <h2 className="my-3 mx-3 font-bold  ">
                  Tu viaje en un vehículo seleccionado
                </h2>
                <p className="text-lg  pb-8 mx-3 ">
                  Con muchos años de experiencia y una gran red provincial, RR
                  Rentals ofrece una experiencia constante en inversión en
                  automóviles a inversores privados y profesionales con la
                  ambición de obtener un retorno financiero y emocional.
                </p>
              </div>
              <div>
                <h2 className="font-bold my-3 ">
                  Colección de vehículos para tu comodidad
                </h2>
                <p className="text-lg  pb-8 ">
                  RR Rentals, que es una de las mejores colecciones de vehículos
                  y de colección de Europa estructurada cronológicamente, y al
                  mismo tiempo también uno de los lugares más accesibles. La
                  exclusiva colección de automóviles abarca vehículos de todo
                  tipo para toda ocasión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Seccion>
    </>
  );
};

SobreNosotros.propTypes = {};

export default SobreNosotros;
