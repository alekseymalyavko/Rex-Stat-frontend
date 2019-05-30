import React from 'react';
import { Line } from 'react-chartjs-2';

const color1 = '#0093ffa8';
const color2 = '#ff2d2d8c';

const line = (props) => {

  const time = props.statistics.date
  
  const views = props.statistics.visitors.map(item => item.views)
  const visitors = props.statistics.visitors.map(item => item.visitors)

  const dataVisitors = {
    labels: time,
    datasets: [
      {
        label: 'Просмотры',
        data: views,
        borderColor: color1,
        backgroundColor: color1,
        borderWidth: 2,
      },
      {
        label: 'Посетители',
        data: visitors,
        borderColor: color2,
        backgroundColor: color2,
        borderWidth: 2,
      }
    ]
  }
  return (
      <div className="chart_wrapper">
        
        <Line
          data={dataVisitors}
          width={100}
          height={40}
          options={{ 
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display:true,
              text: 'Посетители и просмотры',
              fontSize: 35,
              fontColor: '#000'
            },
            legend: {
              display:true,
              position: 'top',
              labels: {
                fontColor: '#000',
                fontSize: 19,
              }
            },
            layout: {
              padding: {
                  left: 0,
                  right: 10,
                  top: 0,
                  bottom: 0
              },
            },
            scales: {
              xAxes: [{ 
                ticks: {
                  fontColor: "#000",
                  fontSize: 13,
                },
              }],
              yAxes: [{
                ticks: {
                  fontColor: "#000",
                  fontSize: 17,
                },
              }],
            }
          }}
        />
      </div>
  )
}
export default line;