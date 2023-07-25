import React, { useState, useEffect } from "react";
import Seccion from "../Components/Seccion";
import { getAllData, getData } from "../Features/apiCalls";
import LinesChart from "../Components/Charts/LineChart";
import BarsChart from "../Components/Charts/BarsChart";
import PiesChart from "../Components/Charts/PiesChart";

export const DashBoard = () => {
  let [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllData("dashboard/dashboard");
        setDashboard(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
            {/* <h2>{dashboard.reservas}</h2> */}
            <p class="font-serif hover:font-bold text-xl">
              {dashboard.reservas}
            </p>
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
            {/* <h3>{dashboard.usuarios}</h3> */}
            <p class="font-serif hover:font-bold text-xl">
              {dashboard.usuarios}
            </p>
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
            <p class="font-serif hover:font-bold text-xl">
              {dashboard.vehiculo}
            </p>
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
            <p class="font-serif hover:font-bold text-xl">
              US$ {dashboard.total}
            </p>
            <p className="font-bold text-xl">Ventas totales</p>
          </div>
        </div>
      </section>
      <div style={{ flexWrap: "wrap" }}>
        <center>
          <p class="font-serif hover:font-bold text-xl">Nuevos Clientes</p>
        </center>
        <br></br>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: "850px", height: "450px" }}
        >
          <LinesChart />
        </div>
        <br></br>
        <center>
          <p class="font-serif hover:font-bold text-xl">
            Vehiculos mas rentados
          </p>
        </center>
        <br></br>
        <div
          className="bg-light mx-auto px-2 border border-2 border-primary"
          style={{ width: "850px", height: "450px" }}
        >
          <BarsChart />
        </div>
        {/* <div className="bg-light mx-auto border border-2 border-primary" style={{width:"850px", height:"450px"}}>
                    <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
                        <PiesChart />                       
                    </div>
                </div> */}
      </div>
    </div>
  );
};
