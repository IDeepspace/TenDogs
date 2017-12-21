import React, { Component } from 'react';
import './layout.css';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        <div className="header">
          <Link to='/'>首页</Link>
        </div>
        <div className="main">
          {this.props.children}
        </div>
        <div className="footer">
          Deepspace
        </div>
      </div>
    );
  }
}

export default Layout;
