import React, { Component } from 'react';

class SomeComponent extends Component {
  constructor() {
    this.state = {};
  }
  handleSubmit = (event) => {
    event && event.preventDefault();
    this.formValidation() ? this.login() : this.handleErrors(this.state);
  };

  formValidation() {}

  handleErrors(state) {}

  login() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}></form>
      </div>
    );
  }
}

export default SomeComponent;
