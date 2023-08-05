import React, { useEffect, useState } from "react";
import CardComponent from "./CardComponent";
import { getAllData } from "../Features/apiCalls";

const ContainerComponent = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [filters, setFilters] = useState({
    marca: "",
    modelo: "",
    color: "",
    anio: "",
  });
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" for ascending, "desc" for descending

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("vehiculo/vehiculo");
        setVehicles(data);
        setFilteredVehicles(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filteredData = vehicles;
    if (filters.marca) {
      filteredData = filteredData.filter(
        (vehicle) => vehicle.Marca === filters.marca
      );
    }
    if (filters.modelo) {
      filteredData = filteredData.filter(
        (vehicle) => vehicle.Modelo === filters.modelo
      );
    }
    if (filters.color) {
      filteredData = filteredData.filter(
        (vehicle) => vehicle.Color.toLowerCase() === filters.color.toLowerCase()
      );
    }
    // Apply sorting
    filteredData.sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      return order * (a.CostoPorDia_veh - b.CostoPorDia_veh);
    });
    setFilteredVehicles(filteredData);
  }, [filters, sortOrder, vehicles]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSortOrderChange = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  // Funciones para obtener valores únicos de Marca, Modelo y Color
  const uniqueBrands = [...new Set(vehicles.map((vehicle) => vehicle.Marca))];
  const uniqueModels = [...new Set(vehicles.map((vehicle) => vehicle.Modelo))];
  const uniqueColors = [...new Set(vehicles.map((vehicle) => vehicle.Color))];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1 container">
          <label className="block font-size: 0.875rem line-height: 1.25rem">
            Marca:
            <select
              name="marca"
              value={filters.marca}
              onChange={handleFilterChange}
              className="mt-1  w-3/6 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            >
              <option value="">Todos</option>
              {uniqueBrands.map((brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="md:col-span-1">
          <label className="block w-2/5">
            Modelo:
            <select
              name="modelo"
              value={filters.modelo}
              onChange={handleFilterChange}
              className="mt-1 w-3/6 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            >
              <option value="">Todos</option>
              {uniqueModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="md:col-span-1">
          <label className="block">
            Color:
            <select
              name="color"
              value={filters.color}
              onChange={handleFilterChange}
              className="mt-1  w-3/6  rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
            >
              <option value="">Todos</option>
              {uniqueColors.map((color, index) => (
                <option key={index} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
        </div>{" "}
        <div className="md:col-span-1 flex items-center">
          <button
            onClick={handleSortOrderChange}
            className="w-full md:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Ordenar {sortOrder === "asc" ? "Ascendente" : "Descendente"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredVehicles.map((vehicle, index) => (
          <CardComponent key={index} data={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default ContainerComponent;
