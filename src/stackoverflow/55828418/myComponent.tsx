import React, { Component } from 'react';
import { Service } from './service';

class MyComponent extends Component {
  private service;

  public componentDidMount() {
    this.service = new Service();
  }

  public onUploadFile = event => {
    const resp = this.service.uploadSomething(event.target.href);
    return resp.then(response => {
      console.log(response.data);
    });
  }

  public render() {
    return <div>my component</div>;
  }
}

export default MyComponent;
