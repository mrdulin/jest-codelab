import React, { Component } from 'react';

class XComponent extends Component {
  private domElement;
  constructor(props) {
    super(props);
    this.load = this.load.bind(this);
  }
  public componentDidMount() {
    this.domElement = document.getElementById('myImg');
    if (this.domElement) {
      this.domElement.addEventListener('load', this.load);
    }
  }
  public load() {
    this.domElement.addEventListener('wheel', this.onWheel);
  }

  public onWheel() {
    //
  }
  public render() {
    return <div>XComponent</div>;
  }
}

export default XComponent;
