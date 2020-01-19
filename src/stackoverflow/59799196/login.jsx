import React, { Component } from 'react';
import { connect } from 'react-redux';

const Input = (props) => <input {...props} />;

class Login extends Component {
  constructor() {
    this.state = {
      email: 0,
      username: 0,
    };
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Input type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />;
        <Input type="email" name="email" onChange={this.handleInputChange} value={this.state.email} />;
      </div>
    );
  }
}

export default connect()(Login);
