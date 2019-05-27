import React from 'react';

const stats = (props) => {
  const basicInfo = props.groupData.basicInfo

  const calculatedData = props.groupData.calculatedData
  
  const members = props.groupData.members
  const bots = members.attempts * 1000 - members.arrMembers.length;
  const percentOfBots = bots / members.attempts * 100;

  const dataForMark = props.groupData.dataForMark

  const allActivity = props.groupData.allActivity
  
  // const statistics = props.groupData.statistics
  // const pinnedPost = props.groupData.pinnedPost
  
  return (
    <div>
        <div className="work__items__item">
            <div className="work__item__img">
                <h4>Группа: {basicInfo.name}</h4>
                <img src="groupPhoto" alt={basicInfo.photo_100}/>
            </div>
            <div className="work__item__text">
                <p>S (уязвимые):              {calculatedData.S}</p>
                <p>I (зараженные):            {calculatedData.I}</p>
                <p>R (невосприимчивые):       {calculatedData.R}</p>
                <p>N (общее количество):      {calculatedData.N}</p>
                <p>q (частота присоединения): {calculatedData.q}</p>
                <p>b (частота выхода):        {calculatedData.b}</p>
            </div>
        </div>
        <div className="work__items__item markovInfo" >
            <h2>Примерное количество ботов в группе</h2>
            <div>
                <p>Из общего числа агентов N являются ботами 
                  {Math.ceil(calculatedData.N * percentOfBots / 100)}, ботов в группе {Math.round(percentOfBots)}%.</p>    
            </div>
        </div>
        <div className="work__items__item markovInfo" >
            <h2>Данные для поиска a, y:</h2>
            <div>
                <p>Уязвимые: {dataForMark.markS}</p>
                <p>Зараженные: {dataForMark.markI}</p>                
                <p>Неуязвимые: {dataForMark.markR}</p>           
            </div>
            
        </div>
        <div className="work__items__item markovInfo" >
            <h2>Данные для поиска u:</h2>
            <div>
                <p>Агенты id: {allActivity.arrMembers}</p>
                <p>Агенты id поставившие like: {allActivity.allLikers}</p>  
                <p>Агенты id поставившие comment: {allActivity.allComments}</p>  
            </div>
        </div>
    </div>
  )
}

export default stats;