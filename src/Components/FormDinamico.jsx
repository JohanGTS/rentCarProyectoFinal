import React, { useState, useReducer } from "react";
import { reducerGeneral } from "../Reducers/reducerGeneral";
import { getData, addData, deleteData, updateData } from "../Features/apiCalls";

const FormDinamico = ({ fields, link }) => {
  const [formValues, setFormValues] = useState({});
  const [state, dispatch] = useReducer(reducerGeneral);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleGuardar = async (e) => {
    e.preventDefault();
    const data = await addData({
      link,
      formValues
    });
    console.log(data);
  };

  const handleEliminar = async (e) => {
    e.preventDefault();
    const data = await deleteData(link, formValues);
    console.log(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await updateData(link, formValues);
    console.log(data);
  };

  const handleBlur = async (e) => {
    const { id, value } = e.target;
    const data = await getData(link);
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-1 gap-4 mt-4">
        <form className="px-8 py-1">
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
              {field.busca ? (
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                >
                  {field.options.map((option, optionIndex) => (
                    <option value={option} key={optionIndex}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                />
              )}
            </div>
          ))}
          <div className="flex justify-end py-4">
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
              type="submit"
              onClick={handleGuardar}
            >
              Guardar
            </button>
            <button
              className="flex-shrink-0 bg-sky-600 hover:bg-sky-800 border-sky-600 hover:border-sky-800 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
              type="submit"
              onClick={handleUpdate}
            >
              Actualizar
            </button>
            <button
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
export default FormDinamico;
