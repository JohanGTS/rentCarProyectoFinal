import React, { useState } from "react";
import imgNoEncontrada from "../assets/imgNoEncontrada.jpg";
import { loadStripe } from "@stripe/stripe-js";
import { data } from "autoprefixer";
import { Elements } from "@stripe/react-stripe-js";
import LoginPopUp from "./ComponentsEspecificos/LoginPopUp";
import ReservaPopUp from "./ComponentsEspecificos/ReservaPopUp";
const CardComponent = ({ data }) => {
  let [estado, setEstado] = useState(false);
  const llavePublica =
    "pk_test_51N0m8BFCP7DBw79T3Z288UoIy9LMHLkrjUgQv0YhCTrtiB1xLnCBzjhU4Gz91Stp6xxeDxPN1W37Ei8WmClkddXI0049rggz4N";
  const stripeTest = loadStripe(llavePublica);
  return (
    <>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <div className="rounded-lg">
          <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
              <img className="w-full" src={`../src/assets/images/${data.Imagen}`} alt={imgNoEncontrada} />
            </div>
          </div>
          <div className="">
            <div className="mt-4 grid grid-cols-2">
              <div className="flex items-center justify-start ml-1">
                <div className="relative">
                  <h2 className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg">
                    {data.Marca +
                      " " +
                      data.Modelo +
                      " " +
                      data.Color.toLowerCase()}
                  </h2>
                  <p className="mt-2 line-clamp-1 text-sm ml-1 text-gray-800">
                    Vehículo : {data.TipoVehiculo.toLowerCase()}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                  <span className="text-sm uppercase"> Precio diario $ </span>
                  <span className="text-lg">{data.CostoPorDia_veh}</span>
                </p>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-4 border-b border-t border-gray-200 pb-3 pt-3">
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  fill="#000000"
                  height="32px"
                  width="32px"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 353.926 353.926"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M210.286,344.926c0,4.971-4.029,9-9,9h-48.65c-4.971,0-9-4.029-9-9s4.029-9,9-9h48.65 C206.257,335.926,210.286,339.955,210.286,344.926z M289.677,258.958v25.928c0,19.259-15.67,34.928-34.931,34.928H99.177 c-19.259,0-34.928-15.668-34.928-34.928v-25.928c0-4.971,4.029-9,9-9h2.394c-0.021-0.258-0.033-0.52-0.033-0.784v-24.118 c-0.013-0.535,0.023-1.066,0.105-1.588c0.204-1.329,0.699-2.561,1.418-3.631c0.705-1.055,1.639-1.969,2.767-2.659 c0.457-0.281,0.94-0.522,1.446-0.719c3.564-1.483,7.107-3.016,10.605-4.586V101.909c0-17.877,11.375-33.581,27.599-39.623 c-0.019-0.492-0.028-0.984-0.028-1.48V38.578C119.521,17.306,136.827,0,158.098,0h37.725C217.095,0,234.4,17.306,234.4,38.578 v22.229c0,0.495-0.01,0.988-0.028,1.478c6.395,2.378,12.129,6.28,16.702,11.351c0.16-0.3,0.318-0.599,0.478-0.899 c2.318-4.396,7.761-6.081,12.16-3.76c4.396,2.319,6.079,7.764,3.76,12.16c-16.845,31.926-41.307,61.508-72.707,87.923 c-25.063,21.083-53.512,39.294-84.813,54.313v26.586h134.02V141.64c0-4.971,4.029-9,9-9s9,4.029,9,9v108.318h18.706 C285.647,249.958,289.677,253.987,289.677,258.958z M137.521,60.807c0,1.842,0.243,3.629,0.699,5.33 c0.073,0.22,0.138,0.444,0.193,0.672c2.574,8.428,10.424,14.576,19.684,14.576h37.725c9.259,0,17.109-6.146,19.685-14.573 c0.057-0.231,0.122-0.458,0.195-0.68c0.455-1.699,0.698-3.484,0.698-5.325V38.578C216.4,27.231,207.169,18,195.822,18h-37.725 c-11.346,0-20.576,9.231-20.576,20.578V60.807z M109.951,203.272c56.184-28.521,102.335-68.15,131.162-112.739 c-2.612-4.871-6.75-8.658-11.666-10.83c-6.622,11.738-19.213,19.681-33.625,19.681h-37.725c-14.411,0-27.002-7.944-33.624-19.682 c-8.604,3.8-14.522,12.438-14.522,22.207V203.272z M271.677,267.958h-18.57c-0.046,0-0.091,0.001-0.136,0.001h-152.02 c-0.045,0-0.09,0-0.136-0.001H82.249v16.928c0,9.334,7.594,16.928,16.928,16.928h155.569c9.336,0,16.931-7.594,16.931-16.928 V267.958z"></path>
                  </g>
                </svg>

                <span className="xl:mt-0 ml-1">
                  {" "}
                  {data.CantidadAsiento_veh}{" "}
                </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  fill="#000000"
                  width="32px"
                  height="32px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M14.25 2.5h-.75v-1h-1.25v1h-8.5v-1H2.5v1h-.75A1.25 1.25 0 0 0 .5 3.75v9.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25v-9.5a1.25 1.25 0 0 0-1.25-1.25zM1.75 3.75h12.5V5H1.75V3.75zm0 9.5v-7h12.5v7z"></path>
                    <path d="M3 8h1.1v1.2H3zm0 2.4h1.1v1.2H3zM11.8 8h1.1v1.2h-1.1zm0 2.4h1.1v1.2h-1.1zM9.6 8h1.1v1.2H9.6zm0 2.4h1.1v1.2H9.6zM7.4 8h1.1v1.2H7.4zm0 2.4h1.1v1.2H7.4zM5.2 8h1.1v1.2H5.2zm0 2.4h1.1v1.2H5.2z"></path>
                  </g>
                </svg>

                <span className="mt-0 ml-1"> {data.Año_veh} </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.75 2H9.75C12.5784 2 13.9926 2 14.8713 2.87868C15.75 3.75736 15.75 5.17157 15.75 8V16.25H17.3214C18.5246 16.25 19.5 17.2254 19.5 18.4286V18.5C19.5 18.9142 19.8358 19.25 20.25 19.25C20.6642 19.25 21 18.9142 21 18.5V13.75L19.7757 13.3419C19.1631 13.1377 18.75 12.5645 18.75 11.9189V9.5C18.75 8.67157 19.4216 8 20.25 8H21V7.62247C21 7.43743 20.9997 7.37384 20.9965 7.31573C20.9631 6.72114 20.6953 6.16405 20.2519 5.76653C20.2085 5.72768 20.1591 5.68774 20.0146 5.57215L18.7815 4.58568C18.458 4.32692 18.4056 3.85495 18.6643 3.53151C18.9231 3.20806 19.3951 3.15562 19.7185 3.41438L20.9678 4.41378C21.0901 4.51163 21.1745 4.57915 21.2531 4.64962C21.9922 5.31214 22.4384 6.24063 22.4941 7.23161C22.5 7.33702 22.5 7.44511 22.5 7.60177V18.5C22.5 19.7427 21.4926 20.75 20.25 20.75C19.0074 20.75 18 19.7427 18 18.5V18.4286C18 18.0538 17.6962 17.75 17.3214 17.75H15.75V21.25H16.8734C17.2876 21.25 17.6234 21.5858 17.6234 22C17.6234 22.4142 17.2876 22.75 16.8734 22.75H1.75C1.33579 22.75 1 22.4142 1 22C1 21.5858 1.33579 21.25 1.75 21.25H2.75V8C2.75 5.17157 2.75 3.75736 3.62868 2.87868C4.50736 2 5.92157 2 8.75 2ZM7 16.25C6.58579 16.25 6.25 16.5858 6.25 17C6.25 17.4142 6.58579 17.75 7 17.75H12C12.4142 17.75 12.75 17.4142 12.75 17C12.75 16.5858 12.4142 16.25 12 16.25H7ZM11 6H8C7.05719 6 6.58579 6 6.29289 6.29289C6 6.58579 6 7.05719 6 8C6 8.94281 6 9.41421 6.29289 9.70711C6.58579 10 7.05719 10 8 10H11C11.9428 10 12.4142 10 12.7071 9.70711C13 9.41421 13 8.94281 13 8C13 7.05719 13 6.58579 12.7071 6.29289C12.4142 6 11.9428 6 11 6Z"
                      fill="#1C274C"
                    ></path>
                  </g>
                </svg>

                <span className="mt-0 ml-1">{data.Combustible} </span>
              </p>
              <p className="flex items-center text-gray-800 xl:flex-row xl:items-center">
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M8 9V15"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M12 9V15"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M8 12H13C13.9319 12 14.3978 12 14.7654 11.8478C15.2554 11.6448 15.6448 11.2554 15.8478 10.7654C16 10.3978 16 9.93188 16 9"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
                  </g>
                </svg>

                <span className="mt-0 ml-1"> {data.Transmision_veh} </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold"
            onClick={() => {
              setEstado(true);
            }}
          >
            Reserva ya
          </button>
        </div>
      </div>
      <>
        <Elements stripe={stripeTest}>
          <ReservaPopUp
            show={estado}
            onHide={() => setEstado(false)}
            vehiculo={data}
            nombreProducto={
              data.Marca + " " + data.Modelo + " " + data.Color.toLowerCase()
            }
          />
        </Elements>
      </>
    </>
  );
};

export default CardComponent;
