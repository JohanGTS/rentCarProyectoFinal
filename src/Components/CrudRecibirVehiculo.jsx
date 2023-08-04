import React, { useState, useEffect } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
  getAllDataSP,
} from "../Features/apiCalls";
import PopUpDinamico from "./PopUpDinamico";
import PopUpPiezaRecibe from "./PopUpPiezaRecibe";

export const CrudRecibirVehiculo = () => {
  const [campos, setCampos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [selectedRow, setSelectedRow] = useState({});
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllData("recibir");
      setClientes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [clientes]);
  let cabeceraHeader = [
    "Id reserva",
    "Nombre del cliente",
    "Fecha inicio",
    "Fecha fin",
    "Matrícula del vehículo",
  ];
  let cabeceraBody = [
    "idReserva_rp",
    "nombreCliente",
    "FechaInicio_res",
    "FechaFin_res",
    "matriculaVehiculo",
  ];
  let cabeceraLocal;
  const handleModifica = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };
  const formatDate = (dateString) => {
    const dateParts = dateString.split("T");
    return dateParts[0]; // Retorna solo la parte antes de la 'T'
  };

  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-gray-500 py-3">{"Entrega de vehículos"}</h2>
      <table className="w-full text-sm text-left text-gray-500 table-fixed">
        <thead>
          <tr>
            {cabeceraHeader.map((campo, index) => {
              return <th key={index}>{campo}</th>;
            })}
            <th key={"acciones"}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((objeto, index) => (
            <tr key={index} className="bg-white border-b">
              {cabeceraBody.map((campo) => (
                <td key={campo} className="px-1 py-4 font-medium text-gray-900">
                  {campo.includes("Fecha")
                    ? formatDate(objeto[campo])
                    : objeto[campo]}
                </td>
              ))}
              <td>
                <button
                  id="guarda"
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                  onClick={() => handleModifica(objeto)}
                >
                  Recibir vehículo
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <PopUpPiezaRecibe
        show={showModal}
        titulo={"Recibimiento de vehículo"}
        valorInicial={selectedRow}
        onHide={() => {
          setShowModal(false);
          fetchData();
        }}
      />
    </div>
  );
};
