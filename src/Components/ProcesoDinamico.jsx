import React, { useState } from "react";
import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";
let actualiza = false;
const limpiarForm = () => {
  const element = document.getElementById("formulario");
  element.reset();
  setFormValues({})
  actualiza = false;
};
const ProcesoDinamico = ({ fields, link }) => {
  const [formValues, setFormValues] = useState({});
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    if (id.includes("id"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else setFormValues({ ...formValues, [id]: value });
  };

  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId = e.target.options[e.target.selectedIndex].getAttribute("data-key");
  
    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
    });
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    const guardar = document.getElementById("guarda");
    guardar.focus();
    if (!actualiza) {
      const data = await addData({
        link,
        formValues,
      });
    } else {
      const data = await updateData(link, formValues);
    }
    limpiarForm();
  };
  
  const handleEliminar = async (e) => {
    e.preventDefault();
    const eliminar = document.getElementById("elimina");
    eliminar.focus();
    const data = await deleteData(link, formValues);
    limpiarForm();
  };
  
  const handleBlur = async (e) => {
    const data = await getData(link, formValues);
    if (data) {
      setFormValues(data);
      actualiza = true;
      console.log(actualiza)
      setTimeout(() => {
        Object.entries(data).forEach(([key, value]) => {
          const field = document.getElementById(key);
          if (field) {
            field.value = value;
          }
        });
      }, 0);
    } else {
      actualiza = false;
    }
  };
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-1 gap-4 mt-4">
        <form className="px-8 py-1" id="formulario">
          {fields.map((field, index) => (
            <div
              className={`${field.fullWidth ? "col-span-2 py-2" : " py-2"} ${
                index < fields.length - 1 &&
                !field.fullWidth &&
                !fields[index + 1].fullWidth
                  ? "lg:col-span-1 col-span-2"
                  : ""
              }`}
              key={index}
            >
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              {field.busca && (
                <>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </>
              )}
              {field.retorna && field.retorna.length > 0 && (
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  onChange={handleSelectChange}
                >
                  {field.retorna.map((option) => {
                    const values = Object.values(option);
                    const key = values[0]; // Obtener el primer valor del objeto
                    const descripcion = values[values.length - 1]; // Obtener el último valor del objeto
                    return (
                      <option key={key} data-key={key} value={descripcion}>
                        {descripcion}
                      </option>
                    );
                  })}
                </select>
              )}

              {!field.busca && !field.retorna && (
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={handleInputChange}
                />
              )}
            </div>
          ))}

          <div className="flex justify-end py-4">
            <button
              id="guarda"
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
              type="submit"
              onClick={handleGuardar}
            >
              Guardar
            </button>

            <button
              id="elimina"
              className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={handleEliminar}
            >
              Eliminar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ProcesoDinamico;
