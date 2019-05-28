import React from 'react';

const markStats = (props) => {
  const dataForMark = props.dataForMark;
  
  return (
    <div className="work__items__item markovInfo" >
      <h2>Данные для поиска a, y:</h2>
      <div>
          <p>Уязвимые: [{dataForMark.markS || 'no data'}]</p>
          <p>Зараженные: [{dataForMark.markI || 'no data'}]</p>                
          <p>Неуязвимые: [{dataForMark.markR || 'no data'}]</p>           
      </div>
    </div>
  )
}
export default markStats;