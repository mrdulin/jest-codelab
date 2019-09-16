import React, { Component } from 'react';
import { testfunction } from './testfunction';

class Login extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    };
  }

  public render() {
    const userParams = {};
    return (
      <div className="login">
        <form onSubmit={() => this.handleSubmit(userParams)}>some form</form>
      </div>
    );
  }

  private handleSubmit(userParams) {
    this.setState({ form: { ...this.state.form, isFetching: true } });
    this.props.dispatch(testfunction(userParams, this.successCallback.bind(this), this.errorCallback.bind(this)));
  }

  private successCallback() {
    console.log('successCallback');
  }
  private errorCallback() {
    console.log('errorCallback');
  }
}

export { Login };
