import React from 'react';
import $ from 'jquery';

var userData = null;
const myURL = 'http://stackoverflow.com';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }
  getData() {
    $.ajax({
      type: 'GET',
      url: myURL,
      success: this.handleSuccess,
      error: this.handleError
    });
  }

  handleError() {
    console.log('ERROR');
  }

  handleSuccess(data) {
    userData = data;
    console.log(userData);
  }

  render() {
    return <div>some stuff</div>;
  }
}
export default Login;
