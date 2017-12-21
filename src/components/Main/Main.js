import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Dog from '../Dog/Dog';

class Main extends Component {
  render() {
    return (
        <div className='main'>
          <Route exact path='/' component={Home}></Route>
          <Route path='/dog/:id' component={Dog}></Route>
        </div>
    );
  }
}

export default Main;
