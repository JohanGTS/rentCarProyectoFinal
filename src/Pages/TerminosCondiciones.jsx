import React from "react";
import Seccion from "../Components/Seccion";

const TerminosCondiciones = () => {
  let contador = 1;
  const terms = [
    "Solamente la persona cuyo nombre aparezca en el contrato y a quén se alquile el vehículo será el conductor. El permitir que cualquier persona meneje el vehículo cancelará todo segurp, y hace que el que alquiló el vehículo se responsabilice por todos los gastos de daños al vehículo los días de reparación.",
    "El vehículo nunca será conducido hasta que haya pasado un mínimo de 12 horas después de ingerir bebidas alcólicas, sin importar la cantidad consumida.",
    "El vehículo no podrá ser usado en carreras o competencias, no se usará para enseñar a conducir, no se usará como taxi, nunca se usará para empujar o remolcar otros vehículos, además que solo será usado en carreteras asfaltadas",
    "El consumo de gasolina será cubierto por el cliente",
    "El vehículo será devuelto en el día y hora especificado en el contrato, en la oficina de la compañia. El incumplimiento de esto hará necesario que la policía recoja el vehículo, siempre que esté reservado para otro cliente, será necesario volver a la oficina de la compañia y hacer un nuevo depósito para poder seguir usando el vehículo.",
    "El cliente no tiene autorización para contratar gastos de reparación de ninguna clase al vehículo.",
    "En caso de accisente, el cliente que alquiló el vehículo notificará de inmedianto a la compañía y a la policia, procediendo a levantar una acta policial y llevará una copia de la misma cuando entregue el vehículo. No obstante, el que rentó siempre pagará el deducible que aparezca. Si fuera inociente del accidente o culpable.",
    "El impuesto del 5% del gobierno para negocio del alquiler de vehículos se añadirá a cada factura.",
    "La cantidad mínima de renta será de 3 días",
    "Si la persona que alquile el vehículo se cambia de dirección en la República DOminicana que dió a la compañia al alquilar el vehículo, deberá informar de inmediato a la oficina de compañía. El incumplimineto hará que el vehículo esté sujeto a ser regido por la policia en cualquier momento y será motivo de que el vehículo sea devuelto de inmediato a la oficina de la compañía.",
    "Las cancelaciones de las reservaciones se cobrará 1 día y lo demás será devuelto en la forma de pago que realizó.",
    ,
    "El cliente devolverá el vehículo en las mismas condiciones en que le fue entregado.",
    "La compañía pone seguro de ley a todos sus vehículos.",
    "Cualquier multa será informada a la compañía y cancelada al cerrar el contrato.",
    "En caso de incumplimiento del contrato podrá ser reportado a Data Crédito.",
  ];
  return (
    <Seccion>
      <div className="container">
        <h2 className="lg:text-4xl font-bold text-2xl py-3">
          Términos y condiciones del servicio   
        </h2>
        <ol>
          {terms.map((valor) => (
            <li
              key={contador}
              className="text-lg py-2"
            >{`${contador++}.  ${valor}`}</li>
          ))}
        </ol>
      </div>
    </Seccion>
  );
};

export default TerminosCondiciones;
