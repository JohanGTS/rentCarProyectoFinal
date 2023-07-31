import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { UserContext } from "../Contexts/UserContext";
import { AdminHome } from "../Pages/AdminHome";
import { loadStripe } from "@stripe/stripe-js";
import { CrudDinamico } from "./CrudDinamico";
import {
  color,
  combustible,
  ciudad,
  documentos,
  estados,
  tipoUsuario,
  tipoVehiculo,
  marca,
  modelo,
  pais,
  seguro,
  pieza,
  vehiculo,
  user,
} from "../JsonDinamico/mantenimientos";
import { DashBoard } from "../Pages/DashBoard";
import { RegistrarCompra } from "./Procesos/RegistrarCompra";
import {
  ReporteClientesFrecuentes,
  ReporteOrdenesRecientes,
  ReporteVehiculosMasRentados,
  ReporteOrdenesRecientesxCliente,
  ReportesFacturasActivas,
} from "../Pages/reportes";
import { Elements } from "@stripe/react-stripe-js";
import CancelarRervacion from "./Procesos/CancelarRervacion";
import Checklist from "./CheckList";
import { CrudEntregaVehiculo } from "./CrudEntregaVehiculo";
import { CrudRecibirVehiculo } from "./CrudRecibirVehiculo";
import { CrudVehiculo } from "./CrudVehiculo";
import { CrudUsuario } from "./CrudUsuario";
export const BarraLateral = () => {
  const llavePublica =
    "pk_test_51N0m8BFCP7DBw79T3Z288UoIy9LMHLkrjUgQv0YhCTrtiB1xLnCBzjhU4Gz91Stp6xxeDxPN1W37Ei8WmClkddXI0049rggz4N";
  const stripeTest = loadStripe(llavePublica);
  const { usuario, setUsuario } = useContext(UserContext);
  const [abrirMantenimiento, setAbrirMantenimiento] = useState(false);
  const [abrirProceso, setAbrirProceso] = useState(false);
  const [abrirReporte, setAbrirReporte] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    setUsuario(null);
    navigate("/contacto");
  };
  const toggleMantenimiento = () => {
    setAbrirMantenimiento((abrir) => !abrir);
    setAbrirProceso(false);
    setAbrirReporte(false);
  };
  const toggleProceso = () => {
    setAbrirProceso((abrir) => !abrir);
    setAbrirMantenimiento(false);
    setAbrirReporte(false);
  };
  const toggleReporte = () => {
    setAbrirReporte((abrir) => !abrir);
    setAbrirMantenimiento(false);
    setAbrirProceso(false);
  };
  const toDashboard = () => {
    navigate("/dashboard");
  };

  const navega = (ruta) => {
    if (ruta !== undefined && ruta !== null) {
      navigate(`/${ruta}`);
    }
  };
  const dropDownProcesos = [
    {
      label: "Reservar Vehiculo",
      value: "registrarCompra",
      ruta: "registrarCompra",
    },
    {
      label: "Cancelar reservacion",
      value: "cancelarReserva",
      ruta: "cancelarReserva",
    },
    {
      label: "Entrega de vehículo",
      value: "entregaVehiculo",
      ruta: "entregaVehiculo",
    },
    {
      label: "Recibimiento de vehículo",
      value: "recibirVehiculo",
      ruta: "recibirVehiculo",
    },
  ];

  const dropDownReportes = [
    {
      label: "Clientes Frecuentes",
      value: "reporteClientesFrecuentes",
      ruta: "reporteClientesFrecuentes",
    },
    {
      label: "Ordenes Recientes",
      value: "reporteOrdenesRecientes",
      ruta: "reporteOrdenesRecientes",
    },
    {
      label: "Ultimas Ordenes",
      value: "reporteOrdenesRecientesxCliente",
      ruta: "reporteOrdenesRecientesxCliente",
    },
    {
      label: "Vehiculos Mas Rentados",
      value: "reporteVehiculosMasRentados",
      ruta: "reporteVehiculosMasRentados",
    },
  ];

  const dropdownItems = [
    { label: "Color", value: "color", ruta: "color" },
    { label: "Combustible", value: "combustible", ruta: "combustible" },
    { label: "Documentos", value: "documento", ruta: "documento" },
    { label: "Ciudades", value: "ciudad", ruta: "ciudad" },
    { label: "Estados", value: "estado", ruta: "estado" },
    { label: "Marcas", value: "marca", ruta: "marca" },
    { label: "Modelos", value: "modelos", ruta: "modelo" },
    { label: "Países", value: "pais", ruta: "pais" },
    { label: "Piezas", value: "pieza", ruta: "pieza" },
    { label: "Seguros", value: "seguro", ruta: "seguro" },
    { label: "Tipos de usuarios", value: "tipoUsuario", ruta: "tipoUsuario" },
    {
      label: "Tipos de vehículos",
      value: "tipoVehiculo",
      ruta: "tipoVehiculo",
    },
    { label: "Usuarios", value: "usuario", ruta: "usuario" },
    { label: "Vehículos", value: "vehiculo", ruta: "vehiculo" },
  ];

  console.log(UserContext.usuario);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <a href="" className="flex ml-2 md:mr-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  RR Rental RD
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100"
                onClick={toDashboard}
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6   text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <ul>
              <button
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 w-full"
                onClick={toggleMantenimiento}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap  ">
                  Mantenimientos
                </span>
                {!abrirProceso || !abrirReporte ? (
                  <ChevronDownIcon className="w-1/6" />
                ) : (
                  <ChevronUpIcon className="w1-1/6" />
                )}
              </button>

              {abrirMantenimiento && (
                <div>
                  {dropdownItems.map((item, index) => (
                    <li key={index}>
                      <button
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                        onClick={() => navega(item.ruta)}
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </div>
              )}
            </ul>
            <ul>
              <button
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                onClick={toggleProceso}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Procesos</span>
                {!abrirMantenimiento || !abrirReporte ? (
                  <ChevronDownIcon className="w-1/6" />
                ) : (
                  <ChevronUpIcon className="w1-1/6" />
                )}
              </button>
              {abrirProceso && (
                <div>
                  {dropDownProcesos.map((item, index) => (
                    <li key={index}>
                      <button
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                        onClick={() => navega(item.ruta)}
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </div>
              )}
            </ul>
            <ul>
              <button
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 "
                onClick={toggleReporte}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Reportes</span>
                {!abrirMantenimiento || !abrirProceso ? (
                  <ChevronDownIcon className="w-1/6" />
                ) : (
                  <ChevronUpIcon className="w1-1/6" />
                )}
              </button>
              {abrirReporte && (
                <div>
                  {dropDownReportes.map((item, index) => (
                    <li key={index}>
                      <button
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                        onClick={() => navega(item.ruta)}
                      >
                        <svg
                          aria-hidden="true"
                          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="flex-1 ml-3 whitespace-nowrap">
                          {item.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </div>
              )}
            </ul>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 "
                onClick={logOut}
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75text-gray-400 group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* Aquí van las rutas dinámicas */}
      <div className="lg:p-4 sm:ml-64">
        <div className="p-4   rounded-lg mt-14">
          <div className=" gap-4 mb-4">
            <Routes>
              <Route path="/dashboard" element={<DashBoard />} />
              <Route
                path="/color"
                element={
                  <CrudDinamico
                    campos={color}
                    link={"color"}
                    titulo={"Color"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/combustible"
                element={
                  <CrudDinamico
                    campos={combustible}
                    link={"combustible"}
                    titulo={"Combustible"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/ciudad"
                element={
                  <CrudDinamico
                    campos={ciudad}
                    link={"ciudad"}
                    titulo={"Ciudades"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/documento"
                element={
                  <CrudDinamico
                    campos={documentos}
                    link={"documento"}
                    titulo={"Documento"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/estado"
                element={
                  <CrudDinamico
                    campos={color}
                    link={"color"}
                    titulo={"Colores"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/tipoUsuario"
                element={
                  <CrudDinamico
                    campos={tipoUsuario}
                    link={"tipoUsuario"}
                    titulo={"Tipo de usuario"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/tipoVehiculo"
                element={
                  <CrudDinamico
                    campos={tipoVehiculo}
                    link={"tipoVehiculo"}
                    titulo={"Tipo de vehiculos"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/marca"
                element={
                  <CrudDinamico
                    campos={marca}
                    link={"marca"}
                    titulo={"Marca"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/modelo"
                element={
                  <CrudDinamico
                    campos={modelo}
                    link={"modelo"}
                    titulo={"Modelo"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/pais"
                element={
                  <CrudDinamico
                    campos={pais}
                    link={"pais"}
                    titulo={"Pais"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/seguro"
                element={
                  <CrudDinamico
                    campos={seguro}
                    link={"seguro"}
                    titulo={"seguro"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/pieza"
                element={
                  <CrudDinamico
                    campos={pieza}
                    link={"pieza"}
                    titulo={"Pieza"}
                    valorInicial={{}}
                  />
                }
              />
              <Route path="/usuario" element={<CrudUsuario />} />
              <Route path="/vehiculo" element={<CrudVehiculo />} />
              <Route
                path="/crud"
                element={
                  <CrudDinamico
                    campos={color}
                    link={"color"}
                    titulo={"Colores"}
                    valorInicial={{}}
                  />
                }
              />
              <Route
                path="/entregaVehiculo"
                element={<CrudEntregaVehiculo />}
              />
              <Route
                path="/recibirVehiculo"
                element={<CrudRecibirVehiculo />}
              />
              <Route
                path="/registrarCompra"
                element={
                  <Elements stripe={stripeTest}>
                    <RegistrarCompra />
                  </Elements>
                }
              />
              <Route path="/cancelarReserva" element={<CancelarRervacion />} />
              <Route
                path="/reporteClientesFrecuentes"
                element={<ReporteClientesFrecuentes />}
              />
              <Route
                path="/reporteOrdenesRecientes"
                element={<ReporteOrdenesRecientes />}
              />
              <Route
                path="/reporteVehiculosMasRentados"
                element={<ReporteVehiculosMasRentados />}
              />
              <Route
                path="/reporteOrdenesRecientesxCliente"
                element={<ReporteOrdenesRecientesxCliente />}
              />
              <Route
                path="/reportesFacturasActivas"
                element={<ReportesFacturasActivas />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};
