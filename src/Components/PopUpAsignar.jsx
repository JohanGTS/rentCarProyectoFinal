import React, { useEffect, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { UserContext } from "../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { updateData, pagoTarjeta, getAllData } from "../Features/apiCalls";
const PopUpDinamico = ({ campos, titulo, valorInicial, ...props }) => {
  const initial = {
    idPersonal_res: 0,
  };
  let inicia = true;
  let formattedDate = "";
  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState({});
  const [empleados, setEmpleados] = useState([]);

  const handleInputChange = (e) => {
    const date1 = new Date(formValues.FechaInicio_Res);
    date1.setDate(date1.getDate());
    const { id, value } = e.target;
    const field = document.getElementById(id);
    if (field && field.type === "date") {
      // Formateamos la fecha al formato "yyyy-MM-dd"
      const formattedDate = new Date(value).toISOString().split("T")[0];
      setFormValues({ ...formValues, [id]: formattedDate });
    } else {
      setFormValues({ ...formValues, [id]: value });
    }
  };

  const firstInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const guardar = document.getElementById("guardar");

    formattedDate = valorInicial.FechaInicio_res.split("T")[0];
    guardar.focus();
    const formulario = document.getElementById("formulario");
    const errores = await validarForm(formValues);
    setFormErrors(errores);

    if (Object.keys(errores).length === 0) {
      await updateData("asignar", formValues);
      formulario.reset();
      props.onHide();
    }
  };
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    inicia = false;
    const selectId = id;
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");

    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
    });
  };
  useEffect(() => {
    handleBlur();
  }, [valorInicial]);
  const handleBlur = () => {
    if (valorInicial) {
      setTimeout(() => {
        Object.entries(valorInicial).forEach(([key, value]) => {
          const field = document.getElementById(key);
          if (field && field.type === "select-one") {
            const options = field.options;
            for (let i = 0; i < options.length; i++) {
              const option = options[i];
              if (option.getAttribute("data-key") == value) {
                option.selected = true;
                break;
              }
            }
          } else {
            if (field && field.type === "date") {
              const formattedDate = new Date(value).toISOString().split("T")[0];
              field.value = formattedDate;
              const id = field.id;
              console.log(id);
              setFormValues((prevFormValues) => ({
                ...prevFormValues,
                [id]: formattedDate,
              }));
            } else {
              field.value = value;
            }
          }
        });
      }, 0);
    }
  };

  const validarForm = async () => {
    let fechaValidada = true;
    const errors = {};

    Object.keys(formValues).forEach((campo) => {
      if (isNaN(campo || campo == "") && !inicia) {
        errors.error = "Debe completar todos los campos";
        fechaValidada = false;
      }
      if (formValues.idPersonal_res == "" || isNaN(formValues.idPersonal_res)) {
        formValues.idPersonal_res = 0;
        fechaValidada = false;
      }
    });
    if (fechaValidada) {
      const resP = await pagoTarjeta("reserva/disponiblePersonal", {
        id: formValues.idPersonal_res,
        inicio: formattedDate,
        hora: valorInicial.Hora_res,
      });
      if (resP.estado_veh == 1) {
        errors.idPersonal_res = "Personal no disponible en ese momento";
        fechaValidada = false;
      }
    }
    // console.log(errors)
    return errors;
  };

  useEffect(() => {
    if (props.show) {
      setFormValues(valorInicial);
      if (firstInputRef.current) {
        firstInputRef.current.focus();
      }
    }
  }, [props.show, valorInicial]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("personal/empleado");
        setEmpleados(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form id="formulario">
            {campos.map((field, index) => (
              <div
                className={`${field.fullWidth ? "col-span-2 py-2" : " py-2"} ${
                  index < campos.length - 1 &&
                  !field.fullWidth &&
                  !campos[index + 1].fullWidth
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
                {field.retorna && field.retorna.length > 0 && (
                  <select
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={field.id}
                    onChange={handleSelectChange}
                  >
                    <option data-key={""}>Asignar más tarde</option>
                    {field.retorna.map((option) => {
                      const values = Object.values(option);
                      const key = values[0];
                      const descripcion = values[1];
                      return (
                        <option key={key} data-key={key} value={descripcion}>
                          {descripcion}
                        </option>
                      );
                    })}
                  </select>
                )}

                {!field.retorna && field.id != "idModelo_veh" && (
                  <input
                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      index == 0 ? "cursor-not-allowed" : ""
                    }`}
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    onChange={handleInputChange}
                    readOnly={index === 0}
                    onBlur={index === 0 ? handleBlur : null}
                    ref={index == 0 ? firstInputRef : null}
                  />
                )}
              </div>
            ))}

            <p className="text-red-700 text-sm font-bold mb-2">
              {formErrors.idPersonal_res}
            </p>
            <div className="flex justify-end">
              <button
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
                type="submit"
                onClick={handleSubmit}
                id="guardar"
              >
                Guardar
              </button>
              <button
                className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
                onClick={props.onHide}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default PopUpDinamico;
