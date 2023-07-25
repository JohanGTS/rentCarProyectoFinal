import { Line } from 'react-chartjs-2';
import { useEffect,useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

const LinesChart = () => {
    const [data, setData] = useState({
        labels: meses,
        datasets: [ // Cada una de las líneas del gráfico
            {
                label: 'Beneficios',
                data: beneficios,
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)',
            },
            {
                label: 'Otra línea',
                data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
            },
        ],
        });
        useEffect(()=> {
            const fetchData= async()=> {
                const url = 'http://localhost:3000/dashboard/cliente_cant'
                const dataSet1 = [];
                const dataSet2 = [];
                const labelSet = [];
              await fetch(url).then((data)=> {
                  console.log("Api data", data)
                  const res = data.json();
                  return res
              }).then((res) => {
                  console.log("ressss", res)
                 for (const val of res) {
                    
                     dataSet1.push(val.MesCliente);
                     dataSet2.push(val.CantidadNuevosClientes);
                     labelSet.push(val.name)
                 }
            setData({
                labels: dataSet1,
                datasets: [ // Cada una de las líneas del gráfico
                    {
                        label: 'Nuevos Vehiculos',
                        data: dataSet2,
                        tension: 0.5,
                        fill : true,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        pointRadius: 5,
                        pointBorderColor: 'rgba(255, 99, 132)',
                        pointBackgroundColor: 'rgba(255, 99, 132)',
                    },
                ],
              })
            }).catch(e => {
                   console.log("error", e)
               })
           }
           
           fetchData();
        },[])
    return <Line data={data} options={misoptions}/>
}

export default LinesChart;