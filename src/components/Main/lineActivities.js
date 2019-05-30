import React from 'react';
import { Line } from 'react-chartjs-2';

const color2 = '#912cc3c9';
const color1 = '#ff2d2d8c';
const color3 = '#22ce70c9';

const line = (props) => {

  const time = props.statistics.date

  const likes = props.statistics.activity.map(item => item.likes)
  const comments = props.statistics.activity.map(item => item.comments)
  const copies = props.statistics.activity.map(item => item.copies)


  const dataActivity = {
    labels: time,
    datasets: [
      {
        label: 'Лайки',
        data: likes,
        borderColor: color1,
        backgroundColor: color1,
        borderWidth: 2,
      },
      {
        label: 'Комментраии',
        data: comments,
        borderColor: color2,
        backgroundColor: color2,
        borderWidth: 1,
      },
      {
        label: 'Репосты',
        data: copies,
        borderColor: color3,
        backgroundColor: color3,
        borderWidth: 1,
      }
    ]
  }

  return (
      <div className="chart_wrapper">
        <Line
          data={dataActivity}
          width={100}
          height={40}
          options={{ 
            responsive: true,
            maintainAspectRatio: true,
            title: {
              display:true,
              text: 'Активность подписчиков',
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