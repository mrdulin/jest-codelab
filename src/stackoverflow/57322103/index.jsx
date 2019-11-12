import React, { Component } from 'react';

class SomeComponent extends Component {
  componentDidMount() {
    this.props.actions.getSomething();
  }
  render() {
    return <div></div>;
  }
}

export default SomeComponent;
