import React from 'react';
import { Pie } from 'react-chartjs-2';

const color2 = '#ff5f5f';
const color3 = '#2a43ff';

const pie = (props) => {
  const bots = props.percentOfBots;
  const users = 100 - props.percentOfBots;

  const data = {
    labels: ['Боты', 'Пользователи'],
    datasets: [
      {
        label: 'amount',
        data: [bots, users],
        borderColor: '#000',
        backgroundColor: [color2, color3],
        borderWidth: 1,
      }
    ]
  }
  return (
    <div className="chart_wrapper">
      <Pie
        data={data}
        width={100}
        height={25}
        options={{ 
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display:true,
            text: 'Соотношение ботов с настоящими пользователями',
            fontSize: 28,
            fontColor: '#000'
          },
          legend: {
            display:true,
            position: 'bottom',
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
        }}
    />
    </div>
  )
}
export default pie;