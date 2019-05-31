import React from 'react';
import { Bar } from 'react-chartjs-2';

const color1 = '#ff2d2d8c';

const line = (props) => {
  const lastIndex = props.statistics.reach.length - 1;
  
  const count = props.statistics.reach[lastIndex].age.map(item => item.count)
  const value = props.statistics.reach[lastIndex].age.map(item => item.value)

  const dataVisitors = {
    labels: value,
    datasets: [
      {
        label: 'Возраст',
        data: count,
        borderColor: color1,
        backgroundColor: color1,
        borderWidth: 2,
      }
    ]
  }
  return (
      <div className="chart_wrapper">
        
        <Bar
          data={dataVisitors}
          width={100}
          height={20}
          options={{ 
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display:true,
              text: 'Возраст',
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