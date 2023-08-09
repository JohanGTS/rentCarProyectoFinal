import React, { useState, useEffect, useContext } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../../Features/apiCalls";
import { UserContext } from "../../Contexts/UserContext";
import { cancelacion2 } from "../../JsonDinamico/mantenimientos";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const CancelarRervacionCliente = () => {
  let actualiza;
  const userContext = useContext(UserContext);
  const [cancelaciones, setCancelaciones] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getData("reserva/cliente", {
        id: userContext.usuario.idTercero_ter,
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

  let cabeceraHeader = cancelacion2.map((obj) => obj.nombre);
  let cabeceraBody = cancelacion2.map((obj) => obj.id);
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
    MySwal.fire({
      title: 'La reserva será cancelada',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      try {
        if (willDelete.isConfirmed) {
          await addData("cancelacion", {
            fake: row.idReserva_res,
            idReserva_can: row.idReserva_res,
            estado_can: "P",
          });
          await updateData("cancelacion/reserva", {
            idReserva_can: row.idReserva_res,
            estado_can: "P",
          });
          await updateData("cancelacion/factura", {
            idReserva_can: row.idReserva_res,
            estado_can: "P",
          });
          await fetchData();
          MySwal.fire({
            icon: 'success',
            text: 'Ha sido cancelada correctamente!', 
          });
          await fetchData();
        } else {
          MySwal.fire({
            icon: "info",
            text: 'No ha sido cancelada!', 
          });
        }
      } catch (error) {
        console.error("Error al llamar al API:", error);
        MySwal.fire({
          icon: 'error',
          text: 'No se ha podido Cancelar la reserva', 
        });
      }
    });
  };
  console.log(cancelaciones);
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
                  {campo.includes("Fecha") && typeof objeto[campo] === "string"
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
