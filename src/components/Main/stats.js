import React from 'react';
import BasicStats from './basicStats';
import BotStats from './botStats';
import MarkStats from './markStats';
import ActivityStats from './activityStats';
import Line from './line';
import LineActivity from './lineActivities';
import LineVisitors from './lineVisitors';
import LineCities from './lineCities';
import LineAge from './lineAge';

import Pie from './pie';

const stats = (props) => {
  const basicInfo = props.groupData.basicInfo;

  let calculatedData = {}, members, bots, percentOfBots, dataForMark, allActivity, statistics
  
  if (props.groupData.statistics.isAvailable !== 0) {
    statistics = props.groupData.statistics
    calculatedData = props.groupData.calculatedData
    members = props.groupData.members
    bots = members.bots.length;
    percentOfBots = bots / (bots + members.arrMembers.length) * 100;
    dataForMark = props.groupData.dataForMark
    allActivity = props.groupData.allActivity
  }
  
  // const pinnedPost = props.groupData.pinnedPost
  
  return (
    <div className="work__items">
        { basicInfo && calculatedData && 
            (
                <BasicStats basicInfo={basicInfo} calculatedData={calculatedData}/>
            )
        }
        
        { statistics && 
            (
                <Line statistics={statistics}/>
            )
        }

        { statistics && 
            (
                <LineActivity statistics={statistics}/>
            )
        }

        { statistics && 
            (
                <LineVisitors statistics={statistics}/>
            )
        }

        { statistics && 
            (
                <LineCities statistics={statistics}/>
            )
        }

        { statistics && 
            (
                <LineAge statistics={statistics}/>
            )
        }

        { percentOfBots && calculatedData && 
            (
                <BotStats count={basicInfo.count} percentOfBots={percentOfBots} calculatedData={calculatedData}/>
            )
        }

        { percentOfBots && 
            (
                <Pie percentOfBots={percentOfBots}/>
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