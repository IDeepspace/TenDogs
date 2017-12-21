import React, { Component } from 'react';
import './dogIcon.css';
import { Link } from 'react-router-dom';
import DeleteIcon from './delete.svg';
import axios from 'axios';

class DogIcon extends Component {

  handleDelete = (e) => {
    e.preventDefault();
    const {dog} = this.props;
    axios.delete(`http://localhost:3009/dogs/${dog.id}`).then(
      res => {
        console.log('deleted');
        this.props.updateDogs(dog.id);
      }
    );

  }

  render() {
    const { dog } = this.props;
    return (
      <Link to={`/dog/${dog.id}`} className='dog-icon'>
        <img onClick={this.handleDelete}
          className='delete-icon'
          src={DeleteIcon} alt="delete"/>
        <div className='dog-img'
          style={{backgroundImage: `url(${dog.imgUrl})`}}>
        </div>
      </Link>
    );
  }
}

export default DogIcon;
