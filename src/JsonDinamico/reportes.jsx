import {
    getData,
    getAllData,
  } from "../Features/apiCalls";
  import React, { useState, useEffect } from "react";


  export const ReporteClientesFrecuentes = () => {
    let [clientes, setClientes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("dashboard/clienteFrecuente");
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
        <section>
        <h2 className="font-bold text-gray-500 py-3">
          Clientes más frecuentes
        </h2>
        <table className="w-full text-sm text-left text-gray-500  table-fixed">
          <thead>
            <tr>
              <th>Id del cliente</th>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Reservaciones</th>
              <th>Total gastado</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.idCliente_res}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.usuario}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.nombre}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.reservaciones}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {"$ " + item.suma_montos}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  )}

    export const ReporteOrdenesRecientes = () => {
      let [ventas, setVentas] = useState([]);
      useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllData("dashboard/ultimasReservas");
            setVentas(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
  return (
    <div>
<section>
        <h2 className="font-bold text-gray-500 py-3">Órdenes recientes</h2>
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead>
            <tr>
              <th>No. reservación</th>
              <th>Matrícula reservada</th>
              <th>Fecha de inicio</th>
              <th>Fecha de fin</th>
              <th>Precio diario</th>
            </tr>
          </thead>
          <tbody>
            {ventas.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.idReserva_res}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.Matricula_veh}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.FechaInicio_res.slice(0, 11).replace("T", " ")}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.FechaFin_res.slice(0, 11).replace("T", " ")}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.CostoPorDia_veh}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  )}

  export const ReporteVehiculosMasRentados = () => {
    let [vehiculo, setVehiculo] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllData("dashboard/vehiculoFrecuente");
          setVehiculo(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, []);
return (
  <div>
<section>
        <h2 className="font-bold text-gray-500 py-3">Vehículos más rentados</h2>
        <table className="w-full text-sm text-left text-gray-500  table-fixed">
          <thead>
            <tr>
              <th>Id del vehículo</th>
              <th>Matrícula del vehículo</th>
              <th>Cantidad reservaciones</th>
              <th>Mayor tiempo reservado</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {vehiculo.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.idVehiculo_res}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.matricula}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.reservaciones}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.diferencia + " días"}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {"$ " + item.costo}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
  </div>
)}