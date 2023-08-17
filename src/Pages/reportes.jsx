import { getData, getAllData, pagoTarjeta } from "../Features/apiCalls";
import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

let fechaInicial = new Date(Date.now());
fechaInicial.setDate(fechaInicial.getDate() - 1);
let fechaReporte = new Date(Date.now());
fechaReporte.setDate(fechaReporte.getDate());
// fechaInicial.setDate(fechaInicial.getDate());

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
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={clientes}
          columns={columns}
          getRowId={(clientes) => clientes.idCliente_res}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
      </section>
    </div>
  );
};

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
    { field: "Nombre_ter", headerName: "CLIENTE", width: 200 },
    { field: "VehiculoNom", headerName: "DESCRIPCION", width: 200 },
    { field: "Matricula_veh", headerName: "MATRICULA", width: 150 },
    { field: "FechaInicio_res", headerName: "FECHA DE INICO", width: 250 },
    { field: "FechaFin_res", headerName: "FECHA DE ENTREGA", width: 250 },
    { field: "CostoPorDia_veh", headerName: "COSTO POR DIA", width: 150 },
  ];

  return (
    <div>
      <section>
        <div>
          <section>
            <DataGrid
              rows={ventas}
              columns={columns}
              getRowId={(ventas) => ventas.idReserva_res}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 15 },
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
  );
};

export const ReporteOrdenesRecientesDashboard = () => {
  let [ventas, setVentas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pagoTarjeta(`dashboard/ultimasReservasDashboard`, {
          FechaCreacion_res: fechaReporte.toISOString().split("T")[0],
        });
        setVentas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const columns = [
    { field: "Nombre_ter", headerName: "CLIENTE", width: 130 },
    { field: "Matricula_veh", headerName: "MATRICULA", width: 100 },
    { field: "VehiculoNom", headerName: "VEHICULO", width: 180 },
    { field: "CostoPorDia_veh", headerName: "COSTO POR DIA", width: 80 },
  ];

  return (
    <div>
      <section>
        <div>
          <section>
            <DataGrid
              rows={ventas}
              columns={columns}
              getRowId={(ventas) => ventas.idReserva_res}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 15 },
                },
              }}
              // pageSizeOptions={[5, 10]}
            />
          </section>
        </div>
      </section>
    </div>
  );
};

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
    { field: "ID", headerName: "RESERVA", width: 200 },
    { field: "VehiculoNom", headerName: "DESCRIPCION", width: 250 },
    { field: "matricula", headerName: "MATRICULA", width: 200 },
    { field: "reservaciones", headerName: "RESERVACIONES", width: 200 },
    { field: "diasrentados", headerName: "DIAS RENTADOS", width: 150 },
    { field: "suma_montos", headerName: "MONTO TOTAL", width: 200 },
  ];

  return (
    <div>
      <section>
        <DataGrid
          rows={vehiculo}
          columns={columns}
          getRowId={(vehiculo) => vehiculo.ID}
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
  );
};

export const ReporteOrdenesRecientesxCliente = () => {
  const userContext = useContext(UserContext);
  let [ventas, setVentas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData(
          `dashboard/OrdenxCliente/${userContext.usuario.idTercero_ter}`
        );
        setVentas(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const columns = [
    { field: "VehiculoNom", headerName: "VEHICULO", width: 200 },
    { field: "Matricula_veh", headerName: "MATRICULA", width: 150 },
    { field: "FechaInicio_res", headerName: "FECHA DE INICO", width: 250 },
    { field: "FechaFin_res", headerName: "FECHA DE ENTREGA", width: 250 },
    { field: "CostoPorDia_veh", headerName: "COSTO POR DIA", width: 200 },
  ];

  return (
    <div>
      <section>
        <div>
          <section>
            <DataGrid
              rows={ventas}
              columns={columns}
              getRowId={(ventas) => ventas.idReserva_res}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 15 },
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
  );
};

export const ReportesFacturasActivas = () => {
  let [facturas, setFacturas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("dashboard/facturasactivas");
        setFacturas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    { field: "idFactura_fac", headerName: "No. FACTURA", width: 150 },
    { field: "CantididadDias_fac", headerName: "CANTIDAD DIAS", width: 250 },
    { field: "CostoPorDia_fac", headerName: "COSTO POR DIA", width: 250 },
    { field: "montoTotal_fac", headerName: "MONTO TOTAL", width: 250 },
    { field: "nombre", headerName: "CLIENTE", width: 250 },
    { field: "VehiculoNom", headerName: "VEHICULO", width: 250 },
    { field: "FechaRegistro_fac", headerName: "FECHA", width: 250 },
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={facturas}
          columns={columns}
          getRowId={(facturas) => facturas.idFactura_fac}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
      </section>
    </div>
  );
};

export const ReportesFacturasActivasXCliente = () => {
  const userContext = useContext(UserContext);
  let [facturas, setFacturas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData(
          `dashboard/facturasactivas/${userContext.usuario.idTercero_ter}`
        );
        setFacturas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    { field: "idFactura_fac", headerName: "No. FACTURA", width: 150 },
    { field: "CantididadDias_fac", headerName: "CANTIDAD DIAS", width: 250 },
    { field: "CostoPorDia_fac", headerName: "COSTO POR DIA", width: 250 },
    { field: "montoTotal_fac", headerName: "MONTO TOTAL", width: 250 },
    { field: "nombre", headerName: "CLIENTE", width: 250 },
    { field: "VehiculoNom", headerName: "VEHICULO", width: 250 },
    { field: "FechaRegistro_fac", headerName: "FECHA", width: 250 },
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={facturas}
          columns={columns}
          getRowId={(facturas) => facturas.idFactura_fac}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
      </section>
    </div>
  );
};

export const ReporteVehiculos = () => {
  const userContext = useContext(UserContext);
  let [vehiculos, setVehiculos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("vehiculo/vehiculo");
        setVehiculos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    { field: "idVehiculo_veh", headerName: "VEHICULO", width: 150 },
    { field: "Marca", headerName: "MARCA", width: 250 },
    { field: "Modelo", headerName: "MODELO", width: 250 },
    { field: "Color", headerName: "COLOR", width: 250 },
    { field: "Año_veh", headerName: "AÑO", width: 250 },
    { field: "CantidadAsiento_veh", headerName: "Cant. ASIENTO", width: 250 },
    { field: "Transmision_veh", headerName: "TRANSMISION", width: 250 },
    { field: "Combustible", headerName: "COMBUSTIBLE", width: 250 },
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={vehiculos}
          columns={columns}
          getRowId={(vehiculos) => vehiculos.idVehiculo_veh}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
      </section>
    </div>
  );
};

export const ReporteOrdenesXEntregar = () => {
  const userContext = useContext(UserContext);
  let [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pagoTarjeta("dashboard/reservasAHacer", {
          FechaInicio_res: fechaInicial.toISOString().split("T")[0],
        });
        setOrdenes(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    { field: "idReserva_res", headerName: "RESERVA", width: 150 },
    { field: "Nombre_ter", headerName: "CLIENTE", width: 200 },
    { field: "FechaInicio_res", headerName: "FECHA DE ENTREGA", width: 210 },
    { field: "matricula_veh", headerName: "MATRICULA", width: 150 },
    { field: "VehiculoNom", headerName: "VEHICULO", width: 200 },
    { field: "Nota_Res", headerName: "SITIO DE ENTREGA", width: 200 },
    { field: "Hora_res", headerName: "HORA DE ENTREGA", width: 180 },
    { field: "Empleado", headerName: "EMPLEADO", width: 180 },
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={ordenes}
          columns={columns}
          getRowId={(ordenes) => ordenes.idReserva_res}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5, 10]}
        />
      </section>
    </div>
  );
};

export const ReporteOrdenesXEntregarDashboard = () => {
  const userContext = useContext(UserContext);
  let [ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await pagoTarjeta("dashboard/reservasXempleado", {
          FechaInicio_res: fechaReporte.toISOString().split("T")[0],
          idPersonal_res: userContext.usuario.idTercero_ter,
        });
        setOrdenes(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const columns = [
    { field: "Hora_res", headerName: "HORA", width: 70 },
    { field: "Nombre_ter", headerName: "CLIENTE", width: 100 },
    { field: "matricula_veh", headerName: "MATRICULA", width: 100 },
    { field: "VehiculoNom", headerName: "VEHICULO", width: 150 },
    { field: "Nota_Res", headerName: "SITIO DE ENTREGA", width: 180 },
  ];
  return (
    <div>
      <section>
        <DataGrid
          rows={ordenes}
          columns={columns}
          getRowId={(ordenes) => ordenes.idReserva_res}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          slots={{}}
        />
      </section>
    </div>
  );
};
