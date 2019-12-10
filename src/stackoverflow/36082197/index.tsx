import React, { Component } from 'react';
import $ from 'jquery';

class SomeComponent extends Component {
  componentDidMount() {
    $(window).on('resize', this.resizeEventHandler);
  }

  resizeEventHandler() {
    console.log('resize event handler');
  }

  render() {
    return <div>some component</div>;
  }
}

export default SomeComponent;
