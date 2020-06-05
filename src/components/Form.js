import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Form extends Component {
  
  state = {
    name: '',
    age: '',
    selectedGender: 'female'
  }
  

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheck = (e) => {
    this.setState({ selectedGender: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div>
          <label>Imię:</label>
          <input id='input-name' type='text' name='name' value={this.state.name} onChange={e => this.handleChange(e)} />
        </div>

        <div>
          <label>Wiek:</label>
          <input id='input-age' type='text' name='age' value={this.state.age} onChange={e => this.handleChange(e)} />  
        </div>

        <div>
          <label className='label-gender'>
            <input type='radio' id='female' value='female' name='gender' checked={this.state.selectedGender === 'female'} onChange={e => this.handleCheck(e)} />
            Kobieta
          </label>
        </div>

        <div>
          <label className='label-gender'>
            <input type='radio' id='male' value='male' name='gender' checked={this.state.selectedGender === 'male'} onChange={e => this.handleCheck(e)} />
            Mężczyzna
          </label>
        </div>

        <div className='button-container'>
          <Button id='btn-submit' variant="contained" color="secondary" type='submit'>
            Wyślij
          </Button>
        </div>

      </form>
    )
  }
}

export default Form

