import React from 'react';
import { HTTP } from '../../request/request';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false,
      id: props.groupData._id,
      data: props.groupData
    };
  }

  async delete(e) {
    const id = this.state.id;

    const res = await HTTP.delete('/api/stats', { 
      data: { id } 
    })
    if (res.status === 200) {
      this.setState({
        isDeleted: true
      })
    }
  }

  open () {
    const data = this.state.data;
    this.props.setCurrentGroup(data)
  }

  render() {
    const name = this.state.data.basicInfo.name
    const img = this.state.data.basicInfo.photo_100
    const dataRange = [this.state.data.statistics.date.shift(), this.state.data.statistics.date.pop()]
    
    if (this.state.isDeleted) {
      return null
    }

    return (
      <div className="group_item">
        <div className="group_item_text">
          <div className="group_item_name">
            {name}
          </div>
          <div className="group_item_img">
            <img src={img} alt="img"/>
          </div>
          <div className="group_item_range">
            Промежуток времени:
            <br/>
            {dataRange[0]} -- {dataRange[1]}
          </div>
        </div>
        
        <div className="group_item_functional">
          <button onClick={ e => { this.delete(e) } }>Удалить</button>
          <button onClick={ e => { this.open(e) } }>Открыть</button>
        </div>
      </div>
    )
  }
}

export default Item;