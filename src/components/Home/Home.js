import React, { Component } from 'react';
import DogIcon from '../DogIcon/DogIcon';
import './dogList.css';
import axios from 'axios';
import AddDog from '../AddDog/AddDog';


class Home extends Component {
  state = {
    dogs: []
  }

  componentDidMount() {
    axios.get('http://localhost:3009/dogs').then(res => {
      console.log(res.data);
      this.setState({
        dogs: res.data
      });
    });
  }

  addDog = (dog) => {
    this.setState({
      dogs:[
        ...this.state.dogs,
        dog
      ]
    });
  }
  updateDogs = (id) => {
    this.setState({
      dogs: this.state.dogs.filter((item) => {
        return item.id !== id;
      })
    });
  }

  render() {
    const dogList = this.state.dogs.map(item => (
      <div key={item.id}>
        <DogIcon dog={item} updateDogs={this.updateDogs} />
      </div>
    ));
    return (
      <div className='dog-list'>
        {dogList}
        <AddDog addDog={this.addDog}/>
      </div>
    );
  }
}

export default Home;
