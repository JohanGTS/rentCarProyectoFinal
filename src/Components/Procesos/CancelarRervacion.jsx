import React, { useState, useEffect,useContext } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../../Features/apiCalls";

import { cancelacion } from "../../JsonDinamico/mantenimientos";
import {UserContext} from "../../Contexts/UserContext"
import { Await } from "react-router-dom";
const CancelarRervacion = () => {
  let actualiza;
  const userContext = useContext(UserContext); 
  console.log(userContext)
  const [cancelaciones, setCancelaciones] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllData("cancelacion");
      setCancelaciones(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  let cabeceraHeader = cancelacion.map((obj) => obj.nombre);
  console.log("cab: " + cabeceraHeader);
  let cabeceraBody = cancelacion.map((obj) => obj.id);
  let cabeceraLocal;
  const limpiarForm = () => {
    const element = document.getElementById("formulario");
    element.reset();
    setFormValues({});
  };
  actualiza = false;

  const handleGuardar = async (e) => {
    e.preventDefault();
    actualiza = false;
    setSelectedRow(objetoVacio);
    setShowModal(true);
    await fetchData();
  };
  const objetoVacio = cabeceraBody.reduce((obj, columna, index) => {
    obj[columna] = index === 0 ? 0 : "";
    return obj;
  }, {});
  const handleModifica = async (row) => {
    const guardar = document.getElementById("guarda");
    guardar.focus();
    row.estado_can = "C";
    await updateData("cancelacion", row);
    await updateData("entrega/reserva",{idReserva_res:row.idReserva_can,estado_res:"C"})
    await fetchData();
  };
  const handleEliminar = async (row) => {
    const eliminar = document.getElementById("elimina");
    eliminar.focus();
    row.estado_can = "D";
    await updateData("cancelacion", row);
    await fetchData();
  };
  console.log(cancelaciones)
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-gray-500 py-3">Cancelaciones</h2>
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
          {cancelaciones.map((objeto, index) => (
            <tr key={index} className="bg-white border-b">
              {cabeceraBody.map((campo) => (
                <td key={campo} className="px-1 py-4 font-medium text-gray-900">
                  {campo == "fechaCancelacion_can"
                    ? objeto[campo].split("T")[0]
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
                  Aceptar
                </button>
                <button
                  id="elimina"
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 mx-1 rounded"
                  type="button"
                  onClick={() => handleEliminar(objeto)}
                >
                  Denegar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancelarRervacion;
