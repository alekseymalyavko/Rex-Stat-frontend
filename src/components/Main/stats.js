import React from 'react';
import BasicStats from './basicStats';
import BotStats from './botStats';
import MarkStats from './markStats';
import ActivityStats from './activityStats';
import Chart from 'chart.js';

const stats = (props) => {
  const basicInfo = props.groupData.basicInfo;

  let calculatedData = {}, members, bots, percentOfBots, dataForMark, allActivity
  
  if (props.groupData.statistics.isAvailable !== 0) {
    calculatedData = props.groupData.calculatedData
    members = props.groupData.members
    bots = members.bots.length;
    percentOfBots = bots / (bots + members.arrMembers.length) * 100;
    dataForMark = props.groupData.dataForMark
    allActivity = props.groupData.allActivity
  }
  
  // const statistics = props.groupData.statistics
  // const pinnedPost = props.groupData.pinnedPost
  
  return (
    <div className="work__items">
        
        { basicInfo && calculatedData && 
            (
                <BasicStats basicInfo={basicInfo} calculatedData={calculatedData}/>
            )
        }
        
        { percentOfBots && calculatedData && 
            (
                <BotStats percentOfBots={percentOfBots} calculatedData={calculatedData}/>
            )
        }

        { percentOfBots && calculatedData && 
           (
               <MarkStats dataForMark={dataForMark}/>
           )
        }

        { members && allActivity && 
           (
               <ActivityStats members={members} allActivity={allActivity}/>
           )
        }

    </div>
  )
}

export default stats;