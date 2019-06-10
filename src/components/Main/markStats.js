import React from 'react';
import { HTTP_1 } from '../../request/request';
import { saveAs } from 'file-saver';

const markStats = (props) => {
  const dataForMark = props.dataForMark;
  
  const getExcel = async () => {
    const excel = await HTTP_1.post('http://localhost:3001/api/stats/excel', dataForMark, {responseType: 'blob'})
    const blob = new Blob([excel.data], 
      { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', 
      }
    ); 
    saveAs(blob, 'markData.xlsx');
  }
  return (
    <div className="work__items__item markovInfo" >
      <h2>Данные для поиска a, y:</h2>
      <div>
          <p>Уязвимые: [{dataForMark.markS.join(', ') || 'no data'}]</p>
          <p>Зараженные: [{dataForMark.markI.join(', ') || 'no data'}]</p>                
          <p>Неуязвимые: [{dataForMark.markR.join(', ') || 'no data'}]</p>           
      </div>
      <div className="button_excel" onClick={ e => getExcel() }>
        Экспорт Excel 
      </div>
    </div>
  )
}
export default markStats;