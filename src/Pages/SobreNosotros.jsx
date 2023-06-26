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
          <div className="lg:w-2/5 ">
            <img
              src={vista}
              alt="Vista del local parcial"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col mb-4 lg:w-1/2">
            <h2 className="lg:text-5xl font-bold text-4xl">Sobre nosotros</h2>
            <p className="text-lg  py-8">
              Estamos disponibles para brindarte ayuda en caso de que tengas
              alguna pregunta o duda, ya sea relacionada con un vehículo en
              particular, conceptos sobre alquiler de vehículos,
              responsabilidades u otros temas. No dudes en ponerte en contacto
              con nosotros haciendo clic en el enlace a continuación. Estaremos
              encantados de asistirte en lo que necesites.
            </p>
            <p>
              Selected Car Leasing tiene más de 13 años de experiencia en el
              arrendamiento de autos deportivos y autos en el segmento premium y
              de lujo. Con gran pasión, conocimiento y una red internacional,
              Selected Car Leasing ayuda al cliente a alcanzar su objetivo en la
              búsqueda del coche soñado.
            </p>

            <p>
              Selected Car Leasing tiene su sede en Stensgårdvej 17 en
              Middelfart, donde en 2017 se abrieron las puertas de un gran
              concesionario de automóviles, que luego se amplió aún más. Desde
              entonces, las cosas se han movido rápidamente, y Selected Car
              Leasing se ha expandido desde entonces y hoy está en todo el país
              con oficinas y salas de exposición en Copenhague, Køge, Hellerup y
              Silkeborg.
            </p>
          </div>
        </div>
      </Seccion>

      <Seccion color="red-200">
        <div className="container mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2">
            <h2 className="lg:text-5xl font-bold text-4xl">
              Más que una empresa de renta de vehículos
            </h2>
            <p className="text-lg  py-8">
              Como una de las principales empresas danesas de leasing, Selected
              Car Leasing garantiza un acuerdo transparente en condiciones
              atractivas. Selected Car Leasing ofrece todos los tipos de
              arrendamiento, incluido el arrendamiento flexible, el
              arrendamiento dividido y el arrendamiento de período.
            </p>
            <p>
              Sin embargo, en Selected Car Leasing, usted se convierte en algo
              más que un cliente con un contrato de arrendamiento. Como parte de
              Selected Car Group, los clientes experimentan el apasionado
              universo automotriz de todo el grupo, así como las sinergias
              internas que unen las actividades de arrendamiento profesional
              junto con fantásticos vehículos de inversión en Selected Car
              Investment y extraordinarios eventos para clientes en Selected Car
              Collection.
            </p>
          </div>
          <div className="lg:w-2/5 ">
            <img
              src={frontal}
              alt="Vista del local parcial"
              className="rounded-lg"
            />
          </div>
        </div>
      </Seccion>

      <Seccion>{/*Estos css están dando problemas en la parte de responsive */}
        <div className="mx-auto flex flex-col lg:flex-row lg:gap-4">
          <div className="flex flex-col mb-4 lg:w-1/2 w-full container ">
            <h2 className="lg:text-5xl font-bold text-4xl mb-2">
              Un servicio impulsado por la calidad y satisfacción
            </h2>
            <div className="flex  flex-row md:flex-row mb-2">
              <div>
                <h2 className="my-3 mx-3 font-bold  "> Tu viaje en un vehículo seleccionado</h2>
                <p className="text-lg  pb-8 mx-3 ">
                  Con muchos años de experiencia y una gran red internacional,
                  Selected Car Investment ofrece una experiencia constante en
                  inversión en automóviles a inversores privados y profesionales
                  con la ambición de obtener un retorno financiero y emocional.
                  La compañía compra y vende vehículos de inversión en todo el
                  mundo y ofrece inversiones conjuntas, donde un grupo de
                  inversores unen fuerzas para invertir en un grupo seleccionado
                  de algunos de los automóviles más exclusivos del mundo con
                  Selected Car Investment como administrador activo.
                </p>
              </div>
              <div>
                <h2 className="font-bold my-3 ">Colección de vehículos para tu comodidad</h2>
                <p className="text-lg  pb-8 ">
                  Selected Car Collection, que es una de las mejores colecciones
                  de coches deportivos clásicos y de colección de Europa
                  estructurada cronológicamente, y al mismo tiempo también uno
                  de los lugares más singulares de Dinamarca para reuniones,
                  eventos y presentaciones exclusivas. La exclusiva colección de
                  automóviles abarca siete décadas de autos clásicos de
                  fabricantes de automóviles de lujo como Ferrari, Porsche,
                  Mercedes-AMG, Jaguar, Lamborghini, BMW y Pagani.
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
