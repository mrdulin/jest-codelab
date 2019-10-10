import React from 'react';
import $ from 'jquery';
import console = require('console');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleError = this.handleError.bind(this);
    this.handleSuccess = this.handleSuccess.bind(this);
  }
  public getData() {
    const myURL = 'https://github.com/mrdulin';
    $.ajax({
      type: 'GET',
      url: myURL,
      success: this.handleSuccess,
      error: this.handleError
    });
  }

  public render() {
    return <div>Login</div>;
  }

  private handleSuccess(data) {
    console.log(data);
  }

  private handleError() {
    alert('ERROR');
  }
}
export default Login;
