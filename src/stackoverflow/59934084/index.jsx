import React, { Component } from 'react';
const { ipcRenderer } = require('electron');

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '', status: false };
  }
  handleFormSubmit = () => {
    const ethData = this.state.data;
    const value = 'value';
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      if (arg === 'success') {
        this.setState({ status: true });
      }
    });
    ipcRenderer.send('update', value);
  };
  render() {
    return <form onSubmit={this.handleFormSubmit}></form>;
  }
}

export default SomeComponent;
