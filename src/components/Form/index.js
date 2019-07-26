import React, { Component } from 'react';
import './styles.css';


export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert('A form was submitted: ' + this.state.name + ' // ' + this.state.email + ' // ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="form-group">
            <label htmlFor="nameImput">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Name" />
          </div><br />
          <div className="form-group">
            <label htmlFor="emailImput">Email</label>
            <input name="email" type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="email@domain.com" />
          </div><br />
          <label>
          Pick your favorite flavour: 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="MARGHERITA">MARGHERITA</option>
            <option value="FUNGHI	">FUNGHI</option>
            <option value="TROPICALI">TROPICALI</option>
            <option value="CARNE">CARNE</option>
            <option value="POLLO">POLLO</option>
            <option value="MILANO	">MILANO</option>
          </select>
        </label><br/><br/>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    )
  }
      }

