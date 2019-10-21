import React, { Component } from 'react';
import io from 'socket.io';

const socket = io();

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.handleNumOfPlayersChanged = this.handleNumOfPlayersChanged.bind(this);
  }
  componentDidMount() {
    socket.on('numOfPlayersChanged', this.handleNumOfPlayersChanged);
  }
  render() {
    return <div>some component</div>;
  }

  handleNumOfPlayersChanged() {
    console.log('do something');
  }
}

export default SomeComponent;
