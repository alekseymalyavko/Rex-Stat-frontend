import React from 'react';

const activityStats = (props) => {
  const allActivity = props.allActivity;
  const members = props.members;
  
  return (
    <div className="work__items__item markovInfo" >
        <h2>Данные для поиска u:</h2>
        <div>
            <p>Агенты id: [{members.arrMembers}]</p>
            <p>Агенты id поставившие like: [{allActivity.allLikers}]</p>  
            <p>Агенты id поставившие comment: [{allActivity.allComments}]</p>  
        </div>
    </div>
  )
}
export default activityStats;