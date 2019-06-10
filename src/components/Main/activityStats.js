import React from 'react';
import { HTTP_1 } from '../../request/request';
import { saveAs } from 'file-saver';

const activityStats = (props) => {
  const allActivity = props.allActivity;
  const members = props.members;
  
  const getExcel = async () => {
    const activity = allActivity
    const excel = await HTTP_1.post('http://localhost:3001/api/stats/excel', activity, {responseType: 'blob'})

    const blob = new Blob([excel.data], 
      { 
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', 
      }
    ); 
    saveAs(blob, 'activity.xlsx');
  }

  return (
    <div className="work__items__item markovInfo" >
        <h2>Данные для поиска u:</h2>
        <div>
            <p>Агенты id: [{members.arrMembers || 'no data'}]</p>
            <p>Агенты id поставившие like: [{allActivity.allLikers || 'no data'}]</p>  
            <p>Агенты id поставившие comment: [{allActivity.allComments || 'no data'}]</p>  
        </div>
        <div className="button_excel" onClick={ e => getExcel() }>
          Экспорт Excel 
        </div>
    </div>
  )
}
export default activityStats;