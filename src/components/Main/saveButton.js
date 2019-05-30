import React from 'react';
import { HTTP } from '../../request/request';

const saveButton = (props) => {
  const groupData = props.groupData
  const saveData = async (groupData) => {    
    const save = 
      await HTTP.post('/api/stats/', {
          ...groupData
      })
    if (save.status === 200) {
      alert('Statistics saved!')
      props.onSaveData()
    }
  }

  return (
    <div className="button_work" onClick={ () => saveData(groupData) }>
      <span className="btn module">Сохранить данные</span>
    </div>
  )
}
export default saveButton;