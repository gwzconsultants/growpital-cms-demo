
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,

} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from 'react'
// import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ChartDataLabels,
    Tooltip,
    Legend,
    Title
);




const BarGraphDesktop = (item) => {
    const rupee_format = (str) => {
        if (str) {
          var x = str;
          x = x.toString();
          var lastThree = x.substring(x.length - 3);
          var otherNumbers = x.substring(0, x.length - 3);
          if (otherNumbers !== "") lastThree = "," + lastThree;
          var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
          return res;
        } else {
          return;
        }
      };
    const { fd, mf, gp, fdtax, mftax,bond,bondtax } = item
 
    const taxgp = ((gp * 0))
    // const yprofit =[profitfd,profitmf,gp]
    // const ytax = [taxfd,taxmd]

    const data = {
        labels: ["Bank FD","Bond", "Mutual Fund", "Growpital"],
        axis: 'y',
        datasets: [
            {
                label: "Profit",
                strokeColor: "#79D1CF",
                barPercentage: 0.6,
                borderRadius: 7,
                type: 'bar',
                data: [fd,bond, mf, gp],
                backgroundColor: "#07E57D",

            },
            {
                label: "Tax",
                
                // barThickness: 75,
                // maxBarThickness: 79,
                barPercentage: 0.6,
                borderRadius: 7,
                type: 'bar',
                data: [fdtax,bondtax, mftax, taxgp],
                backgroundColor: "#FE4226"
            }
        ]
    }


    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',

        tooltips: {
            callbacks: {
                title: (items, data) => console.log(items),
                label: (item, data) => console.log(data)
            },
        },
        plugins: {

            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    color: "white",
                    font: {
                        size: 20,
                        weight: "bold"
                    }
                }
            },
            datalabels: {
               
                display: true,
                color: "white",
                anchor: "end",
                align: "top",
                offset: 25,
                z: 0,
                labels: {

                    title: {

                        font: {
                            size: 20,
                            weight: "bold"
                        }
                    },

                },
                formatter: (value, context) => {

                    const datasetArray = []
                    context.chart.data.datasets.forEach((dataset) => {

                        if (dataset.data[context.dataIndex] !== undefined) {
                            datasetArray.push(dataset.data[context.dataIndex])
                        }
                    })

                    function totalSum(total, datapoint) {
                        return total + datapoint;
                    }

                    let sum = datasetArray.reduce(totalSum, 0)
                    if (context.datasetIndex === datasetArray.length - 1)
                        return "₹ "  +rupee_format(sum)
                    else
                        return ''
                },
            }
        },
        

        layout: {
            borderColor: "white",
            padding: 35
        },


        scales: {



            y: {
                gridLines: { color: "white" },
                display: true,
                color: "white",
                grid: {
                    borderWidth: 3,
                    borderColor: 'white',
                    display: true,
                    z: 1,
                },
                stacked: true,
                beginAtZero: true,
                ticks: {
                    mirror: true,
                    color: "white",
                    labelOffset: -40,
                    font: {
                        size: 20
                    },

                }

            },
            x: {
                stacked: true,
                display: true,
                color: "white",
                beginAtZero: true,
                grid: {


                    borderWidth: 3,
                    borderColor: 'white',
                    display: false,
                },
                ticks: {
                    display: false
                }
            },

        },
    }

    return (
        <>
            <section className='bargraph'>
                <div id="canvas-container">

                    <Bar
                        // plugins={[ChartDataLabels]}
                        data={data}
                        height={500}
                        width={400}

                        options={options} />
                </div>
            </section>
        </>
    )
}

export default BarGraphDesktop