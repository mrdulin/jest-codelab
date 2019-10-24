import React, { Component } from 'react';
import { someHelper } from './utils';

class SomeComponent extends Component {
  render() {
    return <div>some component, {someHelper()}</div>;
  }
}

export default SomeComponent;
