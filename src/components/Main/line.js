import React from 'react';
import { Line } from 'react-chartjs-2';

// function getRandomColorHex() {
//   var hex = "0123456789ABCDEF",
//       color = "#";
//   for (var i = 1; i <= 6; i++) {
//     color += hex[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// const color1 = '#37d862';
// const color2 = '#ff5f5f';
// const color3 = '#2a43ff';

const color1 = '#00ff44ad';
const color2 = '#ff2d2d8c';
const color3 = '#1c36ff9c';

const line = (props) => {

  const time = props.statistics.date
  const activity = props.statistics.activity.map(item => item.likes)
  const reach = props.statistics.reach.map(item => item.reach)
  const visitors = props.statistics.visitors.map(item => item.views)

  const data = {
    labels: time,
    datasets: [
      {
        label: 'Активность',
        data: activity,
        borderColor: color1,
        backgroundColor: color1,
        borderWidth: 2,
      },
      {
        label: 'Охват',
        data: reach,
        borderColor: color2,
        backgroundColor: color2,
        borderWidth: 1,
      },
      {
        label: 'Посещения',
        data: visitors,
        borderColor: color3,
        backgroundColor: color3,
        borderWidth: 1,
      }
    ]
  }
  return (
    <div className="chart_wrapper">
      <Line
        data={data}
        width={100}
        height={40}
        options={{ 
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display:true,
            text: 'Статистика',
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