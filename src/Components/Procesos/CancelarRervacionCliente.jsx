import React, { useState, useEffect, useContext } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../../Features/apiCalls";
import { UserContext } from "../../Contexts/UserContext";

import { cancelacion } from "../../JsonDinamico/mantenimientos";
const CancelarRervacionCliente = () => {
  let actualiza;
  const userContext = useContext(UserContext);
  const [cancelaciones, setCancelaciones] = useState([]);
  console.log(userContext.usuario);
  const fetchData = async () => {
    try {
      const data = await getData("cancelacion", {
        id: userContext.usuario.idCliente,
      });
      console.log(data);
      setCancelaciones(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  let cabeceraHeader = cancelacion.map((obj) => obj.nombre);
  let cabeceraBody = cancelacion.map((obj) => obj.id);
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
    await fetchData();
  };
  const handleEliminar = async (row) => {
    const eliminar = document.getElementById("elimina");
    eliminar.focus();
    row.estado_can = "D";
    await updateData("cancelacion", row);
    await fetchData();
  };
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
                  id="elimina"
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2  rounded"
                  type="button"
                  onClick={() => handleModifica(objeto)}
                >
                  Cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CancelarRervacionCliente;
