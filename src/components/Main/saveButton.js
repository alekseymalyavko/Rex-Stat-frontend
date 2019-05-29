import React from 'react';
import { HTTP } from '../../request/request';

const saveButton = (props) => {
  const groupData = props.groupData
  const saveData = async (groupData) => {    
    const save = 
      await HTTP.post('/api/stats/', {
          ...groupData
      })
    debugger
    console.log(save)
  }

  return (
    <div className="button" onClick={ () => saveData(groupData) }>
      <span className="btn module">Save Data</span>
    </div>
  )
}
export default saveButton;