import React from 'react'

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


const BarGraphMobile = (item) => {

    // For comma format function
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

    // props content
    const { fd, mf, gp, fdtax, mftax,bond,bondtax } = item
    const taxgp = ((gp * 0))


    // data value for chart js
    const data = {
        labels: ["Bank FD","Bond", "Mutual Fund", "Growpital"],
        axis: 'y',
        datasets: [
            {
               
                label: "Profit",
                strokeColor: "#79D1CF",
                borderRadius: 7,
                type: 'bar',
                data: [fd,bond, mf, gp],
                backgroundColor: "#07E57D",
                
            },
            {
                label: "Tax",
                borderRadius: 7,
                type: 'bar',
                data: [fdtax,bondtax, mftax, taxgp],
                backgroundColor: "#FE4226"
            }
        ]
    }

    const options = {
        categoryPercentage:1.0, // here 
        barPercentage: 0.5,  // here
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
                anchor: "start",
                align: "top",
                offset: 20,
                padding:{
                    x:45,
                    y:45
                },
                z: 0,
                labels: {
                    
                    title: {
                        font: {
                            size: 17,
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
                        return"₹ " + rupee_format(sum)
                    else
                        return ''
                },
            }
        },


        layout: {
            borderColor: "white",
            padding:25gi
        },
        

        scales: {

            
            border:{
                display:false,
                width:1,

            },
            
            y: {
                
                gridLines: { color: "white"},
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
                    align:"center",
                    padding:5,
                    // crossAlign:"center",
                    mirror: true,
                    color: "white",
                    z:1,
                    font: {
                        size: 17,
                        weight:500
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
                  
                    tickWidth: 3,
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
                        height={400}
                        width={200}

                        options={options} />
                </div>
            </section>
        </>
    )
}

export default BarGraphMobile