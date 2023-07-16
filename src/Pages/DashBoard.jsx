import React from "react";
import Seccion from "../Components/Seccion";

export const DashBoard = () => {
  let reservas = 214;
  let usuarios = 26;
  let vehiculos = 15;
  let ventasTotales = 24364.01;
  let ventas = [
    {
      pedido: "1",
      matricula: "G475621",
      price: "$20.00",
      fechaI: "02/12/2021",
      fechaF: "06/12/2021",
      monto: "$80.00",
    },
    {
      pedido: "1",
      matricula: "G475621",
      price: "$20.00",
      fechaI: "02/12/2021",
      fechaF: "06/12/2021",
      monto: "$80.00",
    },
    {
      pedido: "1",
      matricula: "G475621",
      price: "$20.00",
      fechaI: "02/12/2021",
      fechaF: "06/12/2021",
      monto: "$80.00",
    },
    {
      pedido: "1",
      matricula: "G475621",
      price: "$20.00",
      fechaI: "02/12/2021",
      fechaF: "06/12/2021",
      monto: "$80.00",
    },
    {
      pedido: "1",
      matricula: "G475621",
      price: "$20.00",
      fechaI: "02/12/2021",
      fechaF: "06/12/2021",
      monto: "$80.00",
    },
  ];
  let clientes = [
    {
      id: "1",
      usuario: "Just me ",
      nombre: "Miguel Pérez",
      reservaciones: "12",
      gastoTotal: "900.00",
    },
    {
      id: "1",
      usuario: "Just me",
      nombre: "Miguel Pérez",
      reservaciones: "12",
      gastoTotal: "900.00",
    },
    {
      id: "1",
      usuario: "Just me",
      nombre: "Miguel Pérez",
      reservaciones: "12",
      gastoTotal: "900.00",
    },
    {
      id: "1",
      usuario: "Just me",
      nombre: "Miguel Pérez",
      reservaciones: "12",
      gastoTotal: "900.00",
    },
    {
      id: "1",
      usuario: "Just me",
      nombre: "Miguel Pérez",
      reservaciones: "12",
      gastoTotal: "900.00",
    },
  ];

  let vehiculo = [
    { matricula: "G156413", reservas: "15", tiempo: "6", precio: "50" },
    { matricula: "G156413", reservas: "15", tiempo: "6", precio: "50" },
    { matricula: "G156413", reservas: "15", tiempo: "6", precio: "50" },
    { matricula: "G156413", reservas: "15", tiempo: "6", precio: "50" },
    { matricula: "G156413", reservas: "15", tiempo: "6", precio: "50" },
  ];
  return (
    <div>
      <section className=" flex flex-wrap justify-between mt-6 mb-6 ">
        <div className="flex pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div>
            <h2>{reservas}</h2>
            <p className="font-bold text-xl">Reservaciones</p>
          </div>
        </div>

        <div className="flex pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <div>
            <h3>{usuarios}</h3>
            <p className="font-bold text-xl">Usuarios</p>
          </div>
        </div>

        <div className="flex pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <div>
            <h3>{vehiculos}</h3>
            <p className="font-bold text-xl">Vehículos</p>
          </div>
        </div>
        <div className="flex pb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3>{ventasTotales}</h3>
            <p className="font-bold text-xl">Ventas totales</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-gray-500 py-3">Órdenes recientes</h2>
        <table className="w-full text-sm text-left text-gray-500 table-fixed">
          <thead>
            <th>No. reservación</th>
            <th>Matrícula reservada</th>
            <th>Fecha de inicio</th>
            <th>Fecha de fin</th>
            <th>Precio diario</th>
          </thead>
          <tbody>
            {ventas.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.pedido}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.matricula}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.fechaI}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.fechaF}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.price}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="font-bold text-gray-500 py-3">
          Clientes más frecuentes
        </h2>
        <table className="w-full text-sm text-left text-gray-500  table-fixed">
          <thead>
            <th>Id del cliente</th>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Reservaciones</th>
            <th>Total gastado</th>
          </thead>
          <tbody>
            {clientes.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.id}
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
                    {"$ " + item.gastoTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="font-bold text-gray-500 py-3">Vehíuclos más rentados</h2>
        <table className="w-full text-sm text-left text-gray-500  table-fixed">
          <thead>
            <th>Matrícula del vehículo</th>
            <th>Cantidad reservaciones</th>
            <th>Mayor tiempo reservado</th>
            <th>Precio</th>
          </thead>
          <tbody>
            {vehiculo.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.matricula}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900  ">
                    {item.reservas}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {item.tiempo+ " días"}
                  </td>
                  <td className="px-1 py-4 font-medium text-gray-900 ">
                    {"$ " + item.precio}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      
    </div>
  );
};
