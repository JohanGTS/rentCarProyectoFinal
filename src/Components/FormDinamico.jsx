import React, { useState, useReducer } from "react";
import { reducerGeneral } from "../Reducers/reducerGeneral";
const FormDinamico = ({ fields, link }) => {
  const [formValues, setFormValues] = useState({});
  const [state, dispatch] = useReducer(reducerGeneral);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };
  const handleGuardar = (e) => {
    e.preventDefault();
    console.log(link);
    dispatch({ type: "guardar" }, link);
  };

  const handleEliminar = () => {
    dispatch({ type: "eliminar", id: state.id }, link);
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    if (id.includes("id")) {
      dispatch({ type: "obtener", id: value }, link);
    }
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
