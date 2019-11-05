import React, { Component } from 'react';

const StyledEnvironment = ({ children, className }) => <div className={className}>{children}</div>;

export default class MyClass extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      balls: []
    };
  }

  onMouseDownHandler(balls, e) {
    // TBD
  }
  onMouseUpHandler(balls, e) {
    // TBD
  }

  render() {
    return (
      <StyledEnvironment className="wrapper">
        <div
          onMouseDown={e => this.onMouseDownHandler(this.state.balls, e)}
          onMouseUp={e => this.onMouseUpHandler(this.state.balls, e)}>
          {this.state.balls}
        </div>
      </StyledEnvironment>
    );
  }
}
