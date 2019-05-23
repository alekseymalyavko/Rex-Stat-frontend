import React from 'react';
import { HTTP } from '../request/request';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}]
    };
  }

  async getData(e) {
    const { data } = await HTTP.get('/api/stats')
    this.setState({ data })
  }

  render() {
    return (
      <div classNameName="App">
        <header classNameName="App-header">
          <p>DATA: {this.state.data[0].name}</p>
          <button onClick={ (e) => this.getData(e) }>click</button>
        </header>
      </div>
    )
  }
}

export default Test;