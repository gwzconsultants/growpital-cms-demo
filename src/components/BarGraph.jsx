// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   // Legend,
//   Title,

// } from 'chart.js';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// import React from 'react'
// import { Card } from 'react-bootstrap';
// import { Bar } from 'react-chartjs-2'
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ChartDataLabels,
//   Tooltip,
//   // Legend,
//   Title
// );

// const BarGraph = (item) => {
//   const { fd, mf, gp } = item
//   const profitfd = fd - ((fd * 10) / 100)
//   const profitmf = mf - ((mf * 10) / 100)
//   const taxfd = ((fd * 10) / 100)
//   const taxmd = ((mf * 10) / 100)
//   const taxgp = ((gp * 0))
//   // const yprofit =[profitfd,profitmf,gp]
//   // const ytax = [taxfd,taxmd]
//   const data = {
//     labels: ["Bank FD", "Mutual Fund", "Growpital"],
//     axis: 'y',
//     datasets: [
//       {
//         label:"profit",
//       strokeColor: "#79D1CF",
//       barThickness: 75,
//       maxBarThickness: 79,
//       borderRadius: 7,
//       type: 'bar',
//       data: [profitfd, profitmf, gp],
//       backgroundColor: "#07E57D",
      
//     },
//      {
//       label:"tax",
//       barThickness: 75,
//       maxBarThickness: 79,
//       borderRadius: 7,
//       type: 'bar',
//       data: [taxfd, taxmd, taxgp],
//       backgroundColor: "#FE4226"
//     }]
//   }


//   const options = {
//     tooltips: {
//       callbacks: {
//         title: (items, data) => console.log(items),
//         label: (item, data) =>  console.log(data)
//       },
//     },
//     plugins: {
//       datalabels: {
//         display: true,
//         color: "white",
//         anchor: "end",
//         align: "top",
//         offset: 35,
//         z:0,
//         labels: {

//           title: {

//             font: {
//               size: 20,
//               weight: "bold"
//             }
//           },

//         },
//         formatter: (value, context) => {

//           const datasetArray = []
//           context.chart.data.datasets.forEach((dataset) => {

//             if (dataset.data[context.dataIndex] != undefined) {
//               datasetArray.push(dataset.data[context.dataIndex])
//             }
//           })

//           function totalSum(total, datapoint) {
//             return total + datapoint;
//           }

//           let sum = datasetArray.reduce(totalSum, 0)
//           if (context.datasetIndex == datasetArray.length - 1)
//             return sum
//           else
//             return ''
//         },
//       }
//     },


//     layout: {
//       borderColor: "white",
//       padding: 25
//     },
//     responsive: true,
//     maintainAspectRatio: false,

//     indexAxis: 'y',
//     scales: {


//       y: {
//         display: true,
//         grid: {
//           display: false
//         },
//         stacked: true,
//         beginAtZero: true,
//         ticks: {
//           mirror: true,
//           color: "white",
//           labelOffset: -50,
//           font: {
//             size: 20
//           },
//           z: 1,
//         }

//       },
//       x: {
//         stacked: true,
//         display: false,
//         beginAtZero: true,
//         ticks: {
//           display: false
//         }
//       },

//     },
//   }

//   return (
//     <>
//       <section className='bargraph'>
//         <Card className='bg-transparent py-3 '>
//           <Card.Body className='bg-transparent '>

//             <Bar
//               // plugins={[ChartDataLabels]}
//               data={data}
//               height={400}

//               options={options} />
//           </Card.Body>

//         </Card>
//       </section>
//     </>
//   )
// }

// export default BarGraph