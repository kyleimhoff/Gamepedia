import React, { Component } from 'react'
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
     handleSubmit(event) {
    const { username, password, password_confirmation } = this.state;
        let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "http://localhost:3001",
  }};
    axios.post(
        "http://localhost:3001/registrations",
        
        {
          user: {
            username: username,
            password: password,
            password_confirmation: password_confirmation
          }
        },axiosConfig
        
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} required />
                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
                    <input type="password" name="password_confirmation" placeholder="Password" value={this.state.password_confirmation} onChange={this.handleChange} required />
                    <button type="submit">Register</button>
                </form>
            
            </div>
        )
    }
}


