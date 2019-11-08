import React, { Component } from 'react';

export class Cars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSearch: true
    };
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  escFunction(event) {
    if (event.keyCode === 27) this.skipCar();
  }

  skipCar() {
    this.setState({ activeSearch: false });
  }

  render() {
    return <div></div>;
  }
}
