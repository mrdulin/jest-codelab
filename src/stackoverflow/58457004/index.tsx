import React, { Component } from 'react';

class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.handleButtonsClicks = this.handleButtonsClicks.bind(this);
  }

  handleButtonsClicks(e) {
    if (e.target.parentNode.getAttribute('id') === 'id1') {
      console.log('do something');
    } else if (e.target.getAttribute('id') === 'id2') {
      console.log('do another thing');
    }
  }

  render() {
    return (
      <div>
        <button id="id1" onClick={this.handleButtonsClicks}>
          Button 1
        </button>
        <button id="id2" onClick={this.handleButtonsClicks}>
          Button 2
        </button>
      </div>
    );
  }
}

export default SomeComponent;
