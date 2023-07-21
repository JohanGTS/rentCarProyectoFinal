import React, { useState, useEffect } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";
import PopUpDinamico from "./PopUpDinamico";

export const CrudVehiculo = ({
  campos,
  link,
  valorInicial,
  titulo,
  ...props
}) => {
  let actualiza;

  const [clientes, setClientes] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [selectedRow, setSelectedRow] = useState({});
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getAllData(link);
      setClientes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [campos]);

  let cabeceraHeader = campos.map((obj) => obj.nombre);
  let cabeceraBody = campos.map((obj) => obj.id);
  let cabeceraLocal;
  const limpiarForm = () => {
    const element = document.getElementById("formulario");
    element.reset();
    setFormValues({});
  };
  actualiza = false;
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    if (id.includes("id"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else setFormValues({ ...formValues, [id]: value });
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");

    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
    });
  };
  const handleGuardar = async (e) => {
    e.preventDefault();
    actualiza = false;
    console.log(objetoVacio);
    setSelectedRow(objetoVacio);
    setShowModal(true);
    await fetchData();
  };
  const objetoVacio = cabeceraBody.reduce((obj, columna, index) => {
    obj[columna] = index === 0 ? 0 : "";
    return obj;
  }, {});
  const handleModifica = (row) => {
    setSelectedRow(row);
    setShowModal(true);
    actualiza = true;
  };
  const handleEliminar = async (valor) => {
    const eliminar = document.getElementById("elimina");
    eliminar.focus();
    const data = await deleteData(link, valor);
    await fetchData();
  };
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-gray-500 py-3">{titulo}</h2>
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
                  {objeto[campo]}
                </td>
              ))}
              <td>
                <button
                  id="guarda"
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit"
                  onClick={() => handleModifica(objeto)}
                >
                  Modificar
                </button>
                <button
                  id="elimina"
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 mx-1 rounded"
                  type="button"
                  onClick={() => handleEliminar(objeto)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-start py-4">
        <button
          id="guarda"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2  rounded"
          type="submit"
          onClick={handleGuardar}
        >
          Nuevo registro
        </button>
      </div>

      <PopUpDinamico
        show={showModal}
        campos={campos}
        titulo={`Registro de ${titulo.toLowerCase()}`}
        link={link}
        actualiza={actualiza}
        valorInicial={selectedRow}
        onHide={() => setShowModal(false)}
      />
    </div>
  );
};
