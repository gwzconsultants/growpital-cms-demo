import {
    Chart as ChartJS,
  
    BarElement,
    CategoryScale,
    LinearScale,
  
  } from 'chart.js';
  
import React from 'react'
import { Bar } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
  );
  
const BarGraph = (props) => {
const {fd ,mf,gp} = props
const profitfd = fd -((fd*10)/100)
const profitmf = mf -((mf*10)/100)
const taxfd= ((fd*10)/100)
const taxmd= ((mf*10)/100)
const yprofit =[profitfd,profitmf,gp]
const ytax = [taxfd,taxmd]
const data = {
        labels:["bank Fd" ,"mutual fund","growpital"],
        axis: 'y',
        datasets: [{
            
            barThickness: 75,
            maxBarThickness: 79,
            borderRadius:7,
            type: 'bar',
            data: yprofit,
            backgroundColor:"#07E57D"
        }, {
            barThickness: 75,
            maxBarThickness: 79,
            borderRadius:7,
            type: 'bar',
            data: ytax,
            backgroundColor:"#FE4226"
        }],
    }

      const options = {
        layout: {
            borderColor:"white",
            padding: 20
        },
        responsive: true,
        maintainAspectRatio: false,
        
        indexAxis: 'y',

        scales: {
            xAxes: [{ticks: {min: 10, max:30}}],
            yAxes: [{ticks: {min: 10, max:20}}],
            y: {
                display: false,
                stacked: true,
              beginAtZero: true
            },
            x: {
                stacked: true,
                display: false,
                beginAtZero: true
              },
          },
    }
   
    return (
        <>
           <Bar 
            data={data}
            height={10}
            options={options}/>
        </>
    )
}

export default BarGraph