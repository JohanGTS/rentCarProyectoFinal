import React, { useContext, useState, useEffect, useRef } from "react";
import {
  addData,
  getAllData,
  getData,
  pagoTarjeta,
} from "../../Features/apiCalls";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { UserContext } from "../../Contexts/UserContext";
import { Modal } from "react-bootstrap";
import easyinvoice from "easyinvoice";
const ReservaPopUp = ({ vehiculo, nombreProducto, ...props }) => {
  const userContext = useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();
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

  let fechaInicial = new Date(Date.now());
  fechaInicial.setDate(fechaInicial.getDate() + 1);
  let segundaFecha = new Date();
  segundaFecha.setDate(segundaFecha.getDate() + 4);
  const initial = {
    idReserva_res: 0,
    idCliente_res: userContext.usuario.idCliente,
    FechaInicio_Res: fechaInicial.toISOString().split("T")[0],
    FechaFin_Res: segundaFecha.toISOString().split("T")[0],
    idVehiculo_res: vehiculo.idVehiculo_veh,
    estado_res: "A",
    costoPorDia_fac: vehiculo.CostoPorDia_veh,
    idRecepcionOnline_fac: "",
    Nota_Res: "Local en Santiago",
    Hora_res: "08:00",
  };

  const [valor, setValor] = useState(1);
  const [formValues, setFormValues] = useState(initial);
  console.log(formValues);
  const [formErrors, setFormErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  let diferenciaDias = 0;
  const lugares = [
    { Nota_Res: "Local en Santiago" },
    { Nota_Res: "Aeropuerto Internacional de las Américas" },
    { Nota_Res: "Aeropuerto Internacional del Cibao" },
    { Nota_Res: "Aeropuerto Internacional de Punta Cana" },
    { Nota_Res: "Aeropuerto Internacional de las Américas" },
  ];
  const handleInputChange = (e) => {
    const { id, value, type } = e.target;
    if (id.includes("id"))
      setFormValues({ ...formValues, [id]: parseInt(value) });
    else if (id.includes("Fecha")) {
      const dateValue = new Date(value).toISOString().split("T")[0];
      setFormValues({ ...formValues, [id]: dateValue });
    } else setFormValues({ ...formValues, [id]: value });
  };

  useEffect(() => {
    const date1 = new Date(formValues.FechaInicio_Res);
    const date2 = new Date(formValues.FechaFin_Res);
    date1.setDate(date1.getDate());
    date2.setDate(date2.getDate());
    const diffTime = Math.abs(date2 - date1);
    diferenciaDias = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diferenciaDias < 0) {
      setValor(1);
    } else {
      setValor(parseFloat(formValues.costoPorDia_fac) * diferenciaDias);
    }
  }, [formValues.FechaInicio_Res, formValues.FechaFin_Res]);

  const guardar = document.getElementById("guarda");
  const enviarEmail = (prueba) => {
    //puerto:2525
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "quitomiguel56@gmail.com",
      Password: "EAC635C56878709AEA14A25537D4F24BEAF9",
      To: userContext.usuario.correo,
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
    console.log("enviado");
  };
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    const selectId = id; //
    const optionId =
      e.target.options[e.target.selectedIndex].getAttribute("data-key");
    if (selectId == "idVehiculo_res")
      matricula = e.target.options[e.target.selectedIndex].value;
    if (selectId != "Nota_Res") {
      setFormValues({
        ...formValues,
        [selectId]: parseInt(optionId),
      });
    } else {
      setFormValues({
        ...formValues,
        [selectId]: optionId,
      });
    }
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
        errors.FechaFin_Res =
          "La fecha de fin no puede ser anterior a la inicial";
      }

      if (date1 < dateActual || date1 == dateActual) {
        errors.FechaInicio_Res =
          "La fecha de inicio no puede ser anterior a la actual";
      }

      if (diferenciaDias < 3) {
        errors.FechaFin_Res = "Menor de 3 días no es posible";
      }
      setValor(parseFloat(formValues.costoPorDia_fac) * diferenciaDias);
      const res = await pagoTarjeta("reserva/disponible", {
        inicio: date1.toISOString().split("T")[0],
        fin: date2.toISOString().split("T")[0],
        id: formValues.idVehiculo_res,
      });
      if (res == 1) {
        errors.FechaInicio_Res = "Vehículo no disponible en esta fecha";
      }
      formValues.FechaInicio_Res = date1.toISOString().split("T")[0];
      formValues.FechaFin_Res = date2.toISOString().split("T")[0];
    }
    return errors;
  };
  const handleGuardar = async (e) => {
    e.preventDefault();
    console.log("Entra");
    const error = await validarForm();
    setFormErrors(error);
    setShowModal(true);
    console.log(Object.keys(formErrors).length);
    if (Object.keys(formErrors).length == 0) {
      console.log("Paga")
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
                company: userContext.usuario.correo, //userContext.usuario.Nombre_ter,
                address: formValues.Nota_Res,
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
                  description: nombreProducto,
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
                date: "Fecha de inicio de reservación",
                description: "Descripción",
                "due-date": "Fecha de fin de reservación",
                products: "Productos",
                quantity: "Cantidad",
                price: "Precio",
                "product-total": "Precio total de productos",
                total: "Total",
              },
            };
            console.log(dataCorreo);
            await easyinvoice.createInvoice(dataCorreo, function (result) {
              enviarEmail(result.pdf);
            });
            props.onHide();
          }
        } catch (error) {
          console.log("Error: " + error);
        }
      } else {
        console.log(error.message);
        setShowModal(false);
      }
      
    } 
      setShowModal(false);
    
  };
  return (
    <Modal
      {...props}
      size="ls"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Realizar reserva
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form>
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
                placeholder={"Seleccione la fecha inicial"}
                onChange={handleInputChange}
                value={formValues.FechaInicio_Res}
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
                value={formValues.FechaFin_Res}
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
                value={formValues.Hora_res}
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
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Valor de la reserva: ${valor}
              </label>
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
        {showModal && (
          <div className="modal-backdrop w-1/2">
            <div className="modal-content">Esperando respuesta...</div>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ReservaPopUp;
