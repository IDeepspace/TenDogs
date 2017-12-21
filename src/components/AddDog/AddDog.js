import React, { Component } from 'react';
import './addDog.css';
import AddIcon from './add.svg';
import axios from 'axios';

class AddDog extends Component {
  state = {
    showForm: false,
    imgUrl: ''
  }

  toggleForm = () => {
   this.setState({
     showForm: !this.state.showForm,
     imgUrl: ''
   })
 }
 handleChange = (e) => {
   this.setState({
     imgUrl: e.target.value
   })
 }
 handleSubmit = () => {
   // console.log(this.state.imgUrl);
   const {imgUrl} = this.state;
   const data = {imgUrl};
   axios.post('http://localhost:3009/dogs',data).then(
     res => {
       console.log(res.data);
       this.toggleForm();
       this.props.addDog(res.data);
     }
   );

 }

  render() {
    const form  = (
      <div className="add-form-wrap">
        <div className="add-form">
          <div className='add-input'>
            <input type="text" required="required" placeholder='imgUrl' onChange={this.handleChange} />
          </div>
          <div className='add-input'>
            <button onClick={this.handleSubmit}>确定</button>
            <button onClick={this.toggleForm}>取消</button>
          </div>
        </div>
      </div>
    )
    const { showForm } = this.state;
    return (
      <div className='add-dog'>
        {showForm && form}
        <img onClick={this.toggleForm}
          className='add-btn'
          src={AddIcon} alt="add"/>
      </div>
    );
  }
}

export default AddDog;
