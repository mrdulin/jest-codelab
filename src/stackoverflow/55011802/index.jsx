import React, { Component } from 'react';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: ''
    };
  }
  render() {
    return (
      <div>
        <input id="file-input" type="file"></input>
        <label
          htmlFor="file-input"
          id="fileinput-testclick"
          onClick={() => {
            document.getElementById('file-input').value = '';
            document.getElementById('file-input').click();
          }}
          className="tran-button file-button">
          {this.state.fileName ? 'Change File' : 'Choose File'}
        </label>
      </div>
    );
  }
}

export default SomeComponent;
