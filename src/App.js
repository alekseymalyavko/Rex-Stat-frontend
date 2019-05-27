import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className='body'>
    <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/main' component={Main}/>
      </Switch>
    <Footer />
  </div>
)

export default App;
