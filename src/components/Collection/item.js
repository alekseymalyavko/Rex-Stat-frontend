import React from 'react';
import { HTTP } from '../../request/request';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleted: false,
      id: props.groupData._id,
      data: {...props.groupData} 
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
    const id = this.state.id;
    this.props.setCurrentGroup(id)
  }

  render() {
    const isActive = this.props.activeId === this.state.id

    const lastIndex = this.state.data.statistics.date.length - 1;

    const name = this.state.data.basicInfo.name;
    const img = this.state.data.basicInfo.photo_100;
    const linkGroup = `https://vk.com/${this.state.data.basicInfo.screen_name}`
    const dataRange = [this.state.data.statistics.date[0], this.state.data.statistics.date[lastIndex]];
    
    if (this.state.isDeleted) {
      return null
    }

    return (
      <div className={ isActive ? 'group_item active' : 'group_item' }>
        <div className="group_item_text">
          <div className="group_item_name">
            {name}
          </div>
          <div className="group_item_img">
            <a target="_blank" rel="noopener noreferrer" href={linkGroup}>
              <img src={img} alt="img"/>
            </a>
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