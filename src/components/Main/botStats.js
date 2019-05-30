import React from 'react';

const botStats = (props) => {
  const calculatedData = props.calculatedData;
  const percentOfBots = props.percentOfBots;
  const count = props.count
  return (
    <div className="work__items__item markovInfo" >
        <h2>Примерное количество ботов в группе</h2>
        <div>
            <p>Из общего числа агентов N ({count}) являются ботами {Math.ceil(calculatedData.N * percentOfBots / 100)} , ботов в группе {Math.round(percentOfBots)}%.</p>    
        </div>
    </div>
  )
}
export default botStats;