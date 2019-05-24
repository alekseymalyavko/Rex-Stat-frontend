import React from 'react';

const loading = (props) => {
  return (
    <div className="loading-item">
      <p className="rexText">Loading data for <span className="groupName">{props.currentGroup}</span> ...</p>
      <div className="rexRoad">
        <span className="rexDino">
          <div className="rex"></div>
        </span>
      </div>
    </div>
  )
}
export default loading;