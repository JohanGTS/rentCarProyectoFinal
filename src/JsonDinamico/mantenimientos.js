import {
  getData,
  getAllData,
  addData,
  deleteData,
  updateData,
} from "../Features/apiCalls";


export const color = [
  {
    id: "idColor_col",
    busca: "a",
    label: "Id del color",
    type: "text",
    placeholder: "Digite el id del color",
    fullWidth: true,
  },
  {
    id: "Descripcion_col",
    label: "Nombre del color",
    type: "text",
    placeholder: "Digite el color",
    fullWidth: true,
  },
];
export const combustible = [
  {
    id: "idCombustible_com",
    busca: "a",
    label: "Id del combustible",
    type: "text",
    placeholder: "Digite el id del combustible",
    fullWidth: true,
  },
  {
    id: "Descripcion_com",
    label: "Nombre del combustible",
    type: "text",
    placeholder: "Digite el combustible",
    fullWidth: true,
  },
];
export const ciudad = [
  {
    id: "idCiudad_ciu",
    busca: "a",
    label: "Id de la ciudad",
    type: "text",
    placeholder: "Digite el id de la ciudad",
    fullWidth: true,
  },
  {
    id: "idEstado_ciu",
    retorna: await getAllData("estado"),
    label: "Id del estado",
    type: "text",
    placeholder: "Digite el id del estado",
    fullWidth: true,
  },
  {
    id: "Descripcion_ciu",
    label: "Nombre de la ciudad",
    type: "text",
    placeholder: "Digite la ciudad",
    fullWidth: true,
  },
];
export const documentos = [
  {
    id: "idDocumento_doc",
    label: "Id del documento",
    busca: "a",
    type: "text",
    placeholder: "Digite el id del documento",
    fullWidth: true,
  },
  {
    id: "Descripcion_doc",
    label: "Nombre del documento",
    type: "text",
    placeholder: "Digite el nombre del documento",
    fullWidth: true,
  },
];
export const estados = [
  {
    id: "idEstado_est",
    busca: "y",
    label: "Id del estado",
    type: "text",
    placeholder: "Digite el id del estado",
    fullWidth: true,
  },
  {
    id: "idPais_est",
    label: "Id del país",
    type: "text",
    placeholder: "Digite el id del país",
    retorna: await getAllData("pais"),
    fullWidth: true,
  },
  {
    id: "Descripcion_est",
    label: "Nombre del estado",
    type: "text",
    placeholder: "Digite el nombre del estado",
    fullWidth: true,
  },
];
export const tipoUsuario = [
  {
    id: "idTipoUsuario_tipusu",
    label: "Id del tipo de usuario",
    busca: "a",
    type: "text",
    placeholder: "Digite el id del tipo de usuario",
    fullWidth: true,
  },
  {
    id: "Descripcion_usu",
    label: "Nombre del tipo de usuario",
    type: "text",
    placeholder: "Digite el nombre del tipo de usuario",
    fullWidth: true,
  },
];
export const tipoVehiculo = [
  {
    id: "idTipoVehiculo_tipveh",
    busca: "a",
    label: "Id del tipo de vehículo",
    type: "text",
    placeholder: "Digite el id del tipo de vehículo",
    fullWidth: true,
  },
  {
    id: "Descripcion_tipveh",
    label: "Nombre del tipo de vehículo",
    type: "text",
    placeholder: "Digite el nombre del tipo de vehículo",
    fullWidth: true,
  },
];
export const marca = [
  {
    id: "idMarca_mar",
    busca: "a",
    label: "Id de la marca",
    type: "text",
    placeholder: "Digite el id de la marca",
    fullWidth: true,
  },
  {
    id: "Descripcion_mar",
    label: "Nombre de la marca",
    type: "text",
    placeholder: "Digite el nombre de la marca",
    fullWidth: true,
  },
];
export const modelo = [
  {
    id: "idModelo_mod",
    busca: "a",
    label: "Id del modelo",
    type: "text",
    placeholder: "Digite el id del modelo",
    fullWidth: true,
  },
  {
    id: "idMarca_mod",
    retorna: await getAllData("marca"),
    label: "Id de la marca",
    type: "text",
    placeholder: "Digite el id de la marca",
    fullWidth: true,
  },
  {
    id: "Descripcion_mod",
    label: "Nombre del modelo",
    type: "text",
    placeholder: "Digite el nombre del modelo",
    fullWidth: true,
  },
];
export const pais = [
  {
    id: "idPais_pai",
    busca: "a",
    label: "Id del país",
    type: "text",
    placeholder: "Digite el id del país",
    fullWidth: true,
  },
  {
    id: "Descripcion_pai",
    label: "Nombre del país",
    type: "text",
    placeholder: "Digite el nombre del país",
    fullWidth: true,
  },
];
export const seguro = [
  {
    id: "idSeguro_seg",
    busca: "a",
    label: "Id del seguro",
    type: "text",
    placeholder: "Digite el id del seguro",
    fullWidth: true,
  },
  {
    id: "Descripcion_seg",
    label: "Nombre del seguro",
    type: "text",
    placeholder: "Digite el nombre del seguro",
    fullWidth: true,
  },
  {
    id: "Plan_seg",
    label: "Nombre del plan",
    type: "text",
    placeholder: "Digite el nombre del plan",
    fullWidth: true,
  },
];
export const pieza = [
  {
    id: "idPieza_pie",
    busca: "a",
    label: "Id de la pieza",
    type: "text",
    placeholder: "Digite el id de la pieza",
    fullWidth: true,
  },
  {
    id: "Descripcion_pie",
    label: "Nombre de la pieza",
    type: "text",
    placeholder: "Digite el nombre de la pieza",
    fullWidth: true,
  },
];
export const todosVehiculos= [
  {retorna: await getAllData("vehiculo")}
]
export const todosClientes= [
  {retorna: await getAllData("personal/cliente")}
]
export const vehiculo = [
  {
    id: "idVehiculo_veh",
    busca: "a",
    label: "Id del vehiculo",
    type: "text",
    placeholder: "Digite el id del vehiculo",
    fullWidth: true,
  },
  {
    id: "idTipoVehiculo_veh",
    retorna: await getAllData("tipovehiculo"),
    label: "Id del tipo de vehiculo",
    type: "text",
    placeholder: "Digite el id del tipo de vehiculo",
    fullWidth: true,
  },
  {
    id: "idMarca_veh",
    retorna: await getAllData("marca"),
    label: "Id del tipo de marca",
    type: "text",
    placeholder: "Digite el id del tipo de marca",
    fullWidth: true,
  },
  {
    id: "idModelo_veh",
    retorna: await getAllData("modelo"),
    label: "Id del tipo de modelo",
    type: "text",
    placeholder: "Digite el id del tipo de modelo",
    fullWidth: true,
  },
  {
    id: "Transmision_veh",
    label: "Nombre de la transmisión",
    type: "text",
    placeholder: "Digite el nombre de la transmisión",
    fullWidth: true,
  },
  {
    id: "Año_veh",
    label: "Año fabricación",
    type: "number",
    placeholder: "Digite el año del vehículo",
    fullWidth: true,
  },
  {
    id: "CantidadAsiento_veh",
    label: "Cantidad de asientos",
    type: "number",
    placeholder: "Digite la cantidad de asientos",
    fullWidth: true,
  },
  {
    id: "Matricula_veh",
    label: "Matrícula",
    type: "text",
    placeholder: "Digite la matrícula",
    fullWidth: true,
  },
  {
    id: "Disponibilidad_veh",
    label: "Vehículo disponible",
    type: "text",
    placeholder: "Digite la disponibilidad",
    fullWidth: true,
  },
  {
    id: "idColor_veh",
    retorna: await getAllData("color"),
    label: "Id del color",
    type: "text",
    placeholder: "Digite el id del color",
    fullWidth: true,
  },
  {
    id: "idSeguro_veh",
    retorna: await getAllData("seguro"),
    label: "Id del seguro",
    type: "text",
    placeholder: "Digite el id del seguro",
    fullWidth: true,
  },
  {
    id: "CostoPorDia_veh",
    label: "Costo por día (Dólares)",
    type: "text",
    placeholder: "Digite el costo por día(dólares)",
    fullWidth: true,
  },
  {
    id: "Chasis_veh",
    label: "Chasis",
    type: "text",
    placeholder: "Digite el chasis",
    fullWidth: true,
  },
  {
    id: "idCombustible_veh",
    retorna: await getAllData("combustible"),
    label: "Id del combustible",
    type: "text",
    placeholder: "Digite el id del combustible",
    fullWidth: true,
  },
  {
    id: "Cantidad_combustible",
    label: "Cantidad de combustible",
    type: "text",
    placeholder: "Digite la cantidad de combustible soporta",
    fullWidth: true,
  },
];
export const user = [
  {
    id: "idTercero_ter",
    busca: "a",
    label: "Id del usuario",
    type: "text",
    placeholder: "Digite el id del usuario",
    fullWidth: true,
  },
  {
    id: "Nombre_ter",
    label: "Nombre completo",
    type: "text",
    placeholder: "Digite el nombre completo",
    fullWidth: true,
  },
  {
    id: "Telefono_ter",
    label: "Teléfono",
    type: "text",
    placeholder: "Digite el teléfono completo",
    fullWidth: true,
  },
  {
    id: "idDocumento_ter",
    retorna: await getAllData("documento"),
    label: "Id del tipo de modelo",
    type: "text",
    placeholder: "Digite el id del tipo de modelo",
    fullWidth: true,
  },
  {
    id: "Documento_ter",
    label: "Documento",
    type: "text",
    placeholder: "Digite el número del documento",
    fullWidth: true,
  },
  {
    id: "Fecha_Nacimiento_ter",
    label: "Nombre de la transmisión",
    type: "date",
    placeholder: "Digite el nombre de la transmisión",
    fullWidth: true,
  },
  {
    id: "Correo_ter",
    label: "Correo electrónico",
    type: "mail",
    placeholder: "Digite su correo",
    fullWidth: true,
  },
  {
    id: "idTipoUsuario_usu",
    retorna: await getAllData("tipousuario"),
    label: "Id del tipo de usuario",
    type: "text",
    placeholder: "Digite el id del tipo de modelo",
    fullWidth: true,
  },
  {
    id: "Nombre_usu",
    label: "Nombre de usuario",
    type: "mail",
    placeholder: "Digite su usuario",
    fullWidth: true,
  },
  {
    id: "Clave_usu",
    label: "Contraseña",
    type: "password",
    placeholder: "Digite la contraseña",
    fullWidth: true,
  },
  {
    id: "Fecha_Ingreso_usu",
    label: "Fecha de ingreso",
    type: "date",
    placeholder: "Digite la disponibilidad",
    fullWidth: true,
  },
  {
    id: "Pais_dir",
    retorna: await getAllData("pais"),
    label: "Id del pais",
    type: "text",
    placeholder: "Digite el id del país",
    fullWidth: true,
  },
  {
    id: "Ciudad_dir",
    retorna: await getAllData("ciudad"),
    label: "Id de la ciudad",
    type: "text",
    placeholder: "Digite el id de la ciudad",
    fullWidth: true,
  },
  {
    id: "Estado_dir",
    retorna: await getAllData("estado"),
    label: "Id del estado",
    type: "text",
    placeholder: "Digite el id del estado",
    fullWidth: true,
  },
  {
    id: "CodigoPostal_dir",
    label: "Código postal",
    type: "text",
    placeholder: "Código postal",
    fullWidth: true,
  },
  {
    id: "Especificacion_terdir",
    label: "Resto de la dirección",
    type: "text",
    placeholder: "Digite el resto de la dirección",
    fullWidth: true,
  },

];
