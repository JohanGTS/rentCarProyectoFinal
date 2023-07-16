import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";



export const registroReserva = [
  {
    id: "idReserva_res",
    busca: "a",
    label: "Número de la reserva",
    type: "text",
    placeholder: "Digite el id de la reservaa",
    fullWidth: true,
  },
  {
    id: "idCliente_res",
    retorna: await getAllData("personal/cliente"),
    label: "Cliente",
    type: "text",
    placeholder: "Digite el id del tipo de vehiculo",
    fullWidth: true,
  },
  {
    id: "idTipoVehiculo_veh",
    retorna: await getAllData("vehiculo"),
    label: "Matrícula del vehiculo",
    type: "text",
    placeholder: "Digite el id del tipo de vehiculo",
    fullWidth: true,
  },{
    id: "FechaInicio_Res",
    label: "Fecha de inicio",
    type: "date",
    placeholder: "Digite el id del vehiculo",
    fullWidth: true,
  },{
    id: "FechaFin_Res",
    label: "Fecha de fin",
    type: "date",
    placeholder: "Digite el id del vehiculo",
    fullWidth: true,
  },{
    id: "costoPorDia_fac",
    label: "Costo diario (Dólares)",
    type: "number",
    placeholder: "Digite el costo diario",
    fullWidth: true,
  },
];

export const paises ={
  retorna: getAllData("pais")
}