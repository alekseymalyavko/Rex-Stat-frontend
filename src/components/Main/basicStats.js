import React from 'react';

const basicStat = (props) => {
  const basicInfo = props.basicInfo;
  const linkGroup = `https://vk.com/${basicInfo.screen_name}`
  const calculatedData = props.calculatedData;

  return (
    <div className="work__items__item">
        <div className="work__item__img">
            <h4>Группа: {basicInfo.name}</h4>
            <a target="_blank" rel="noopener noreferrer" href={linkGroup}>
              <img src={basicInfo.photo_100} alt="groupImg"/>
            </a>
        </div>
        <div className="work__item__text">
          { calculatedData.S ? 
              (
                <div>
                  <p>S (уязвимые):              {calculatedData.S || 'no data'}</p>
                  <p>I (зараженные):            {calculatedData.I || 'no data'}</p>
                  <p>R (невосприимчивые):       {calculatedData.R || 'no data'}</p>
                  <p>N (общее количество):      {calculatedData.N || 'no data'}</p>
                  <p>q (частота присоединения): {calculatedData.q || 'no data'}</p>
                  <p>b (частота выхода):        {calculatedData.b || 'no data'}</p>
                </div>
            ) : (
                <h3>Статистика группы закрыта</h3>
            )
          }
        </div>

    </div>
  )
}
export default basicStat;