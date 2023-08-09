import React, { useState, useEffect } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
  getAllDataSP,
  pagoTarjeta,
} from "../Features/apiCalls";
import { asignarPersonal } from "../JsonDinamico/mantenimientos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PopUpDinamico from "./PopUpAsignar";

const MySwal = withReactContent(Swal);

let fechaInicial = new Date(Date.now());
fechaInicial.setDate(fechaInicial.getDate());
const link = "vehiculo";
let actualiza;


export const CrudAsignarEntrega = () => {
    let campos = asignarPersonal;
    // const [campos, setCampos] = useState([]);
    const [personal, setPersonal] = useState([]);
    // const [formValues, setFormValues] = useState({});
    const [selectedRow, setSelectedRow] = useState({});
    const [showModal, setShowModal] = useState(false);

    const fetchData = async () => {
        try {
          const data = await pagoTarjeta("asignar",{
            FechaInicio_res: fechaInicial.toISOString().split("T")[0],});
            setPersonal(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchData();
      }, [personal]);
      let cabeceraHeader = [
        "Id reserva",
        "Id Personal",
        "Nombre del Empleado",
        "Hora",
        "Fecha inicio",
      ];
      let cabeceraBody = [
        "idReserva_res",
        "idPersonal_res",
        "Personal",
        "Hora_res",
        "FechaInicio_res",
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
        <h2 className="font-bold text-gray-500 py-3">{"Asignar Personal"}</h2>
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
            {personal.map((objeto, index) => (
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
                    Asignar personal
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <PopUpDinamico
        show={showModal}
        campos={campos}
        titulo={`Asignar Personal`}
        link={link}
        actualiza={actualiza}
        valorInicial={selectedRow}
        onHide={() => {
          setShowModal(false);
          fetchData();
        }}
      />
      </div>
      )
};  
