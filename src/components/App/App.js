import React, { Component } from 'react';
import Layout from '../Layout/Layout.js';
import Main from '../Main/Main.js';
import {BrowserRouter as Router} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Main />
        </Layout>
      </Router>
    );
  }
}

export default App;
