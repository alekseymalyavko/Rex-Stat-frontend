import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './components/Home';
import Main from './components/Main';
import Popup from './components/Popup';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false
    }
  }

  openPopup() {
    this.setState({
      isPopupOpen: true
    });
  }

  closePopup(e) {
    this.setState({
      isPopupOpen: false
    });
  }

  render() {
    return (
      <div className='body'>
        <Header openPopup={(e) => this.openPopup(e)}/>
        <Popup isPopupOpen={this.state.isPopupOpen} closePopup={(e) => this.closePopup(e)}/>
          <Switch>
            <Route exact path='/' 
                   render={() => <Home openPopup={(e) => this.openPopup(e)}/>}
            />
            <Route path='/main' component={Main}/>
            <Redirect to='/'/>
          </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
