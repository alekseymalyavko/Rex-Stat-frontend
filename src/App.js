import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{}]
    };
  }

  async getData(e) {
    const { data } = await axios.get(process.env.API_URL || 'http://localhost:3333/api/stats')
    this.setState({ data })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>DATA: {this.state.data[0].name}</p>
          <button onClick={ (e) => this.getData(e) }>click</button>
        </header>
      </div>
    )
  }
}

export default App;
