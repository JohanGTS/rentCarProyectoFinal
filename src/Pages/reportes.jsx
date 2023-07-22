import {
    getData,
    getAllData,
  } from "../Features/apiCalls";
  import React, { useState, useEffect } from "react";
  import { DataGrid, GridToolbar } from "@mui/x-data-grid";
  import Box from '@mui/material/Box';
  import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

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
  const columns = [
    { field: "idCliente_res", headerName: "NO. CLIENTE", width: 150 },
    { field: "nombre", headerName: "CLIENTE", width: 250 },
    { field: "usuario", headerName: "USUARIO", width: 250 },
    { field: "suma_montos", headerName: "MONTO TOTAL GASTADO", width: 250 },
    { field: "reservaciones", headerName: "CANT. RESERVACIONES", width: 250 },
]
  return (
    <div>
        <section>
        <DataGrid
          rows={clientes}
          columns={columns}
          getRowId = {(clientes) => clientes.idCliente_res}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
            
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
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

      const columns = [
        { field: "idReserva_res", headerName: "RESERVA", width: 150 },
        { field: "VehiculoNom", headerName: "DESCRIPCION", width: 200 },
        { field: "Matricula_veh", headerName: "MATRICULA", width: 150 },
        { field: "FechaInicio_res", headerName: "FECHA DE INICO", width: 250 },
        { field: "FechaFin_res", headerName: "FECHA DE ENTREGA", width: 250 },
        { field: "CostoPorDia_veh", headerName: "COSTO POR DIA", width: 200 },
    ]
    
  return (
    <div>
<section>
<div>
    <section>
    <DataGrid
          rows={ventas}
          columns={columns}
          getRowId = {(ventas) => ventas.idReserva_res}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
    </section>
</div>
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

  const columns = [
    { field: "ID", headerName: "VEHICULO", width: 200 },
    { field: "VehiculoNom", headerName: "DESCRIPCION", width: 250 },
    { field: "matricula", headerName: "MATRICULA", width: 200 },
    { field: "reservaciones", headerName: "RESERVACIONES", width: 200 },
    { field: "diasrentados", headerName: "DIAS RENTADOS", width: 150 },
    { field: "costo", headerName: "COSTO POR DIA", width: 200 },
]

return (
<div>
    <section>
    <DataGrid
          rows={vehiculo}
          columns={columns}
          getRowId = {(vehiculo) => vehiculo.ID}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
    </section>
</div>
)}

export const ReporteOrdenesRecientesxCliente = () => {
  const userContext = useContext(UserContext);
  let [ventas, setVentas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData(`personal/OrdenxCliente/${userContext.usuario.idCliente_res}`);
        setVentas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "idReserva_res", headerName: "RESERVA", width: 150 },
    { field: "VehiculoNom", headerName: "DESCRIPCION", width: 200 },
    { field: "Matricula_veh", headerName: "MATRICULA", width: 150 },
    { field: "FechaInicio_res", headerName: "FECHA DE INICO", width: 250 },
    { field: "FechaFin_res", headerName: "FECHA DE ENTREGA", width: 250 },
    { field: "CostoPorDia_veh", headerName: "COSTO POR DIA", width: 200 },
]

return (
<div>
<section>
<div>
<section>
<DataGrid
      rows={ventas}
      columns={columns}
      getRowId = {(ventas) => ventas.idReserva_res}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      slots={{
        toolbar: GridToolbar,
      }}
      pageSizeOptions={[5, 10]}
    />
</section>
</div>
  </section>
</div>
)}