import React, { useState, useEffect, useRef } from "react";
import {
  addData,
  getAllData,
  getData,
  pagoTarjeta,
} from "../../Features/apiCalls";
import logo from "../../assets/rrlogo.jpg";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import easyinvoice from "easyinvoice";
export const RegistrarCompra = () => {
  const stripe = useStripe();
  const elements = useElements();
  const initial = {
    idReserva_res: 0,
    idCliente_res: "",
    FechaInicio_Res: "",
    FechaFin_Res: "",
    idVehiculo_res: "",
    estado_res: "A",
    costoPorDia_fac: 1.0,
    idRecepcionOnline_fac: "",
    Nota_Res: "Local en Santiago",
    Hora_res: "08:00",
  };

  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState({});
  const lugares = [
    { Nota_Res: "Local en Santiago" },
    { Nota_Res: "Aeropuerto Internacional de las Américas" },
    { Nota_Res: "Aeropuerto Internacional del Cibao" },
    { Nota_Res: "Aeropuerto Internacional de Punta Cana" },
    { Nota_Res: "Aeropuerto Internacional de las Américas" },
  ];

  /*
  easyinvoice.createInvoice(dataCorreo, function (result) {
    console.log("PDF base64 string: ", result.pdf);
  });*/

  const enviarEmail = (prueba) => {
    //puerto:2525
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "quitomiguel56@gmail.com",
      Password: "EAC635C56878709AEA14A25537D4F24BEAF9",
      To: "lewag69356@sparkroi.com",
      From: "quitomiguel56@gmail.com",
      Subject: "Recibo de reservación",
      Body: "Confirmación de reservación de vehículo adjuntada",
      Attachments: [
        {
          name: "recibo.pdf",
          data: prueba,
        },
      ],
    });
  };

  const validarForm = async () => {
    let fechaValidada = true;
    const errors = {};
    if (formValues.idVehiculo_res == "" || isNaN(formValues.idVehiculo_res)) {
      errors.idVehiculo_res = "Debe especificar el vehículo";
      fechaValidada = false;
    }
    if (formValues.idCliente_res == "" || isNaN(formValues.idCliente_res)) {
      errors.idCliente_res = "Debe especificar el cliente";
      fechaValidada = false;
    }
    if (formValues.FechaInicio_Res == "") {
      console.log("Debe especificar la fecha inicial");
      errors.FechaInicio_Res = "Debe especificar la fecha inicial";
      fechaValidada = false;
    }
    if (formValues.FechaFin_Res == "") {
      console.log("Debe especificar la fecha final");
      errors.FechaFin_Res = "Debe especificar la fecha final";
      fechaValidada = false;
    }

    if (fechaValidada) {
      const dateActual = Date.now();
      const date1 = new Date(formValues.FechaInicio_Res);
      const date2 = new Date(formValues.FechaFin_Res);
      date1.setDate(date1.getDate());
      date2.setDate(date2.getDate());
      const diffTime = Math.abs(date2 - date1);

      diferenciaDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diferenciaDias > 90) {
        errors.FechaFin_Res =
          "No es posible rentar un vehículo por más de 90 días";
      }

      if (date2 < date1) {
        console.log("La fecha de fin no puede ser anterior a la inicial");
        errors.FechaFin_Res =
          "La fecha de fin no puede ser anterior a la inicial";
      }

      if (date1 < dateActual) {
        console.log("date1:" + date1);
        console.log("dateActual:" + dateActual);
        errors.FechaInicio_Res =
          "La fecha de inicio no puede ser anterior a la actual";
      }

      if (diferenciaDias < 3) {
        console.log(date1);
        console.log(date2);
        console.log("Menor de 3 días no es posible");
        errors.FechaFin_Res = "Menor de 3 días no es posible";
      }
      const res = await pagoTarjeta("reserva/disponible", {
        inicio: date1.toISOString().split("T")[0],
        fin: date2.toISOString().split("T")[0],
        id: formValues.idVehiculo_res,
      });
      if (res == 1) {
        errors.FechaInicio_Res = "Vehículo no disponible en esta fecha";
      }
      valor = parseFloat(formValues.costoPorDia_fac) * diferenciaDias;

      formValues.FechaInicio_Res = date1.toISOString().split("T")[0];
      formValues.FechaFin_Res = date2.toISOString().split("T")[0];

      console.log(formValues);
    }
    return errors;
  };
  const opcionTarjetas = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#162234",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "#000" },
        "::placeholder": { color: "#000" },
      },
      invalid: {
        iconColor: "#162234",
        color: "#D83A18",
      },
    },
  };
  let diferenciaDias = 0;
  let valor = 1;
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    if (id.includes("id"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else if (id.includes("Fecha")) {
      const dateValue = new Date(value).toISOString().split("T")[0];
      setFormValues({ ...formValues, [id]: dateValue });
    } else setFormValues({ ...formValues, [id]: value });
    console.log(formValues);
  };
  const guardar = document.getElementById("guarda");

  const handleGuardar = async (e) => {
    //guardar.focus();
    e.preventDefault();
    const error = await validarForm();
    setFormErrors(error);

    if (Object.keys(formErrors).length == 0) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (!error) {
        try {
          const { id } = paymentMethod;
          const res = await pagoTarjeta("reserva/pagoTarjeta", {
            amount: valor * 100,
            id,
          });
          if (res.id) {
            console.log("Se hizo");
            formValues.idRecepcionOnline_fac = res.id;
            await addData("reserva", formValues);
            let dataCorreo = {
              customize: {},
              images: {
                logo: "https://static.vecteezy.com/system/resources/previews/000/623/239/original/auto-car-logo-template-vector-icon.jpg",
              },
              sender: {
                company: "RR RENTALS RD",
                address:
                  "Autopista Duarte #10 Reparto los Garcia Al lado de Torre Real 2",
                zip: "5100",
                city: "Santiago de los caballeros",
                country: "República Dominicana",
              },
              client: {
                company: "Client Corp",
                address: "",
                zip: "",
                city: "",
                country: "",
              },
              information: {
                number: id,
                date: formValues.FechaInicio_Res,
                "due-date": formValues.FechaFin_Res,
              },
              products: [
                {
                  quantity: 1,
                  description: "Product 1",
                  "tax-rate": 0,
                  price: valor,
                },
              ],
              "bottom-notice":
                "Este documento certifica que la reservación fue hecha de manera correcta",
              settings: {
                currency: "USD",
              },
              translate: {
                invoice: "Factura",
                number: "Número",
                date: "Fecha",
                description: "Descripción",
                "due-date": "Fecha de corte",
                products: "Productos",
                quantity: "Cantidad",
                price: "Precio",
                "product-total": "Precio total de productos",
                total: "Total",
              },
            };
            await easyinvoice.createInvoice(dataCorreo, function (result) {
              //The response will contain a base64 encoded PDF file
              enviarEmail(result.pdf);
            });
            limpiarForm(); //
          }
        } catch (error) {
          console.log("Error: " + error);
        }
      } else {
        console.log(error.message);
      }
    }
  };

  const limpiarForm = () => {
    const element = document.getElementById("formulario");
    element.reset();
    setFormValues(initial);
    setFormErrors([]);
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

  const [vehiculos, setVehiculos] = useState([]);
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("vehiculo");
        setVehiculos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("personal/cliente");
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <form id="formulario">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"idCliente_res"}
          >
            {"Cliente"}
          </label>

          <select
            key={"nose"}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={"idCliente_res"}
            onChange={handleSelectChange}
          >
            <option data-key={""}>Seleccione un valor</option>
            {clientes.map((values, index) => {
              const key = values["idTercero_ter"];
              const descripcion =
                values["Nombre_usu"] + " : " + values["Nombre_ter"];
              return (
                <option key={index} data-key={key} value={descripcion}>
                  {descripcion}
                </option>
              );
            })}
          </select>
          <p className="text-red-700 text-sm font-bold mb-2">
            {formErrors.idCliente_res}
          </p>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"idVehiculo_res"}
          >
            {"Matrícula del vehículo"}
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={"idVehiculo_res"}
            onChange={handleSelectChange2}
          >
            <option data-key={""}>Seleccione un valor</option>
            {vehiculos.map((values) => {
              const key = values["idVehiculo_veh"];
              const descripcion = values["Matricula_veh"];
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
          <p className="text-red-700 text-sm font-bold mb-2">
            {formErrors.idVehiculo_res}
          </p>
        </div>

        <div>
          <label
            htmlFor={"FechaInicio_Res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Fecha de inicio"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"date"}
            id={"FechaInicio_Res"}
            name={"FechaInicio_Res"}
            placeholder={"Seleccione su fecha de nacimiento"}
            onChange={handleInputChange}
            required
          />

          <p className="text-red-700 text-sm font-bold mb-2">
            {formErrors.FechaInicio_Res}
          </p>
        </div>
        <div key={"FechaFin_Res"}>
          <label
            htmlFor={"FechaFin_Res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Fecha de fin de reservación"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"date"}
            id={"FechaFin_Res"}
            name={"FechaFin_Res"}
            placeholder={"Seleccione su fecha de nacimiento"}
            onChange={handleInputChange}
            required
          />

          <p className="text-red-700 text-sm font-bold mb-2">
            {formErrors.FechaFin_Res}
          </p>
        </div>
        <div key={"Hora_res"}>
          <label
            htmlFor={"Hora_res"}
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {"Hora de entrega"}
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type={"time"}
            id={"Hora_res"}
            name={"Hora_res"}
            placeholder={"Seleccione la hora de entrega"}
            onChange={handleInputChange}
            required
          />
        </div>
        <div key={"Nota_Res"}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={"Nota_Res"}
          >
            {"Lugar de entrega"}
          </label>

          <select
            key={"nose"}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={"Nota_Res"}
            onChange={handleSelectChange}
          >
            {lugares.map((values, index) => {
              const key = values["Nota_Res"];
              const descripcion = values["Nota_Res"];
              return (
                <option key={index} data-key={key} value={descripcion}>
                  {descripcion}
                </option>
              );
            })}
          </select>
          <p className="text-red-700 text-sm font-bold mb-2">
            {formErrors.idCliente_res}
          </p>
        </div>
        <div className="py-2">
          <CardElement options={opcionTarjetas} />
        </div>
        <div className="flex justify-end py-4">
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 mx-2 rounded"
            type="submit"
            onClick={handleGuardar}
            id="guardar"
          >
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
};
