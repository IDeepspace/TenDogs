import React, { Component } from 'react'
import axios from 'axios';
import './dog.css';

class Dog extends Component {
  state = {
    imgUrl: ''
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    axios.get(`http://localhost:3009/dogs/${id}`).then(
      res => {
        console.log(res.data.imgUrl);
        this.setState({
          imgUrl: res.data.imgUrl
        });
      }
    )
  }

  render() {
    return (
      <div className='dog'>
        <img src={this.state.imgUrl} alt=""/>
      </div>
    );
  }
}

export default Dog;
