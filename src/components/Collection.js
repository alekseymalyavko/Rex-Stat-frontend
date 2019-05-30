import React from 'react';
import { HTTP } from '../request/request';
import Item from './Collection/item';
import Stats from './Main/stats';
// import DATA from './Collection/data';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      currentGroup: null,
      data: []
    };
  }

  componentWillMount() {
    this.setState({
      loading: true
    })
    this.getData()
  }
  
  setCurrentGroup(data) {
    this.setState({
      currentGroup: data
    })
  }

  async getData() {
    const result = await HTTP.get('/api/stats')
    this.setState({
      loading: false,
      data: [...result.data]
    })
    console.log(this.state.data)
  }

  render() {
    return (
      <section className="work white">
        <div className="data_items">
          { this.state.data.length > 0 && (
              this.state.data.map((item,i) => <Item setCurrentGroup={ e => this.setCurrentGroup(e) } groupData={item} key={i}/>)
            )
          }
          { this.state.data.length === null && (
               <p>No Data</p>
            )
          }
          { this.state.loading === true && (
              <p>Loading...</p>
            )
          }
        </div>

        { this.state.currentGroup !== null && (
            <Stats groupData={this.state.currentGroup}/>
          )
        }
      </section>
    )
  }
}

export default Test;