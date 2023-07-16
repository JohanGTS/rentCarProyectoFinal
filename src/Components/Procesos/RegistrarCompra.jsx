import React, { useState, useEffect, useRef } from "react";
import { getAllData, getData, addData } from "../../Features/apiCalls";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const RegistrarCompra = ({ vehiculos, clientes }) => {
  const initial = {
    idReserva_res: 0,
    idCliente_res: "",
    FechaInicio_res: "",
    FechaFin_res: "",
    idVehiculo_res: "",
    estado_res: "A",
    costoPorDia_fac: 1.0,
  };
  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState({});
  const validarForm = () => {
    const errors = {};
    let fechaValidada = true;
    if (formValues.FechaInicio_res == "") {
      console.log("Debe especifivar la fecha inicial");
      errors.FechaFin_Res = "Debe especifivar la fecha inicial";
      fechaValidada = false;
    }
    if (formValues.FechaFin_res == "") {
      console.log("Debe especifivar la fecha inicial");
      errors.FechaFin_Res = "Debe especifivar la fecha inicial";
      fechaValidada = false;
    }
    if (fechaValidada) {
      const date1 = new Date(formValues.FechaInicio_res);
      const date2 = new Date(formValues.FechaFin_res);
      const diffTime = Math.abs(date2 - date1);
      console.log(formValues.FechaInicio_res);
      diferenciaDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diferenciaDias < 4) {
        console.log("Menor de 3 días no es posible");
        errors.FechaFin_Res = "Menor de 3 días no es posible";
      }
      //valor = parseFloat(formValues.costoPorDia_fac) * diferenciaDias;

    }
    console.log(valor);
    return errors;
  };

  let diferenciaDias = 0;
  let valor = 15.21;
  let actualiza = false;
  const handleInputChange = (e) => {
    console.log(formValues);
    const { id, value, type } = e.target;
    if (id.includes("id"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else if (id.includes("Fecha")) {
      const dateValue = new Date(value).toISOString().split("T")[0];
      setFormValues({ ...formValues, [id]: dateValue });
    } else setFormValues({ ...formValues, [id]: value });
  };
  const guardar = document.getElementById("guarda");
  const handleGuardar = async (e) => {
    guardar.focus();
    e.preventDefault();

    /*if (!actualiza) {
      const data = await addData({
        link,
        formValues,
      });
    } else {
      const data = await updateData(link, formValues);
    }*/
    limpiarForm();
  };

  const handleBlur = async (e) => {
    const data = false; //= await getData("reserva", formValues);
    console.log(data);
    console.log(formValues);
    validarForm();
    if (data) {
      setFormValues(data);
      actualiza = true;
      setTimeout(() => {
        const fecha1 = document.getElementById("FechaInicio_Res");
        Object.entries(data).forEach(([key, value]) => {
          console.log("key:" + key);
          const field = document.getElementById(key);
          if (field) {
            if (field.type === "date") {
              const dateValue = new Date(value).toISOString().split("T")[0];
              field.value = dateValue;
            } else if (field && field.type === "select-one") {
              const options = field.options;
              console.log("entra");
              for (let i = 0; i < options.length; i++) {
                const option = options[i];
                console.log(value);
                if (option.getAttribute("data-key") == value) {
                  option.selected = true;
                  console.log(value);
                  break;
                }
              }
            } else {
              field.value = value;
            }
          }
        });
      }, 0);
    } else {
      actualiza = false;
    }
  };
  const limpiarForm = () => {
    const element = document.getElementById("formulario");
    element.reset();
    setFormValues({});
    actualiza = false;
  };
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");
    if (selectId == "idVehiculo_res")
      matricula = e.target.options[e.target.selectedIndex].value;
    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
    });
  };
  const handleSelectChange2 = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");
    const precio =
      e.target.options[e.target.selectedIndex].getAttribute("data-precio");

    setFormValues({
      ...formValues,
      [selectId]: parseInt(optionId),
      costoPorDia_fac: parseFloat(precio),
    });
  };

  return (
    <div>
      <form id="formulario">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"idReserva_res"}
          >
            {"Número de la reservación"}
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={"idReserva_res"}
            name={"idReserva_res"}
            type={"text"}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"idCliente_res"}
          >
            {"Cliente"}
          </label>
          {vehiculos[0].retorna && vehiculos[0].retorna.length > 0 && (
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={"idCliente_res"}
              onChange={handleSelectChange}
            >
              {clientes[0].retorna.map((values) => {
                const key = values["Codigo"]; // Obtener el primer valor del objeto
                const descripcion = values["Nombre_ter"]; // Obtener el último valor del objeto
                return (
                  <option key={key} data-key={key} value={descripcion}>
                    {descripcion}
                  </option>
                );
              })}
            </select>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"idVehiculo_res"}
          >
            {"Matrícula del vehículo"}
          </label>
          {vehiculos[0].retorna && vehiculos[0].retorna.length > 0 && (
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={"idVehiculo_res"}
              onChange={handleSelectChange2}
            >
              {vehiculos[0].retorna.map((values) => {
                const key = values["idVehiculo_veh"]; // Obtener el primer valor del objeto
                const descripcion = values["Matricula_veh"]; // Obtener el último valor del objeto
                const precio = values["CostoPorDia_veh"];
                return (
                  <option
                    key={key}
                    data-key={key}
                    data-precio={precio}
                    value={descripcion}
                  >
                    {descripcion}
                  </option>
                );
              })}
            </select>
          )}
        </div>

        <div>
          <label
            htmlFor={"FechaInicio_res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Fecha de inicio"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"date"}
            id={"FechaInicio_res"}
            name={"FechaInicio_res"}
            placeholder={"Seleccione su fecha de nacimiento"}
            onChange={handleInputChange}
            required
          />
        </div>
        <div key={"FechaFin_res"}>
          <label
            htmlFor={"FechaFin_res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Fecha de fin de reservación"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"date"}
            id={"FechaFin_res"}
            name={"FechaFin_res"}
            placeholder={"Seleccione su fecha de nacimiento"}
            onChange={handleInputChange}
            required
          />
        </div>
        <div key={"estado_res"}>
          <label
            htmlFor={"estado_res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Estado (1 char)"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"text"}
            id={"estado_res"}
            name={"estado_res"}
            placeholder={"Estado"}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <PayPalScriptProvider
            options={{
              "client-id":
                "AZ1_l2avQ3MnBiyxKMtXsxPbYyBymiLCRoN10f0JqGS1oLnhznBqrJif3DLr_7SP2NSz8ICEK7N9gvhD",
              cookie: {
                sameSite: "Lax",
              },
            }}
          >
            <PayPalButtons
              createOrder={(data, actions) => {
                setFormErrors(validarForm());
                if (Object.keys(formErrors).length === 0) {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: valor,
                        },
                      },
                    ],
                  });
                } else {
                  alert("No se puede");
                }
              }}
              onApprove={async (data, actions) => {
                const details = await actions.order.capture();
                alert("Amount " + valor);
              }}
              onCancel={() => {
                alert("Transaction cancelled");
              }}
            />
          </PayPalScriptProvider>
        </div>
        <div className="flex justify-end py-4"></div>
      </form>
    </div>
  );
};
