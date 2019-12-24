import React, { Component } from 'react';

class App extends Component {
  mailReference = React.createRef();
  handlingEmailBlur = (events) => {
    this.mailReference.current.validate(events.target.value);
  };

  render() {
    return (
      <div className="Form1" onBlur={this.handlingEmailBlur}>
        some component
      </div>
    );
  }
}

export default App;
