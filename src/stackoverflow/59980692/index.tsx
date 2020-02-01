import React, { Component } from 'react';

export const Component1 = () => <span>component 1</span>;
export const Component2 = () => <span>component 2</span>;
export const Component3 = () => <span>component 3</span>;

class MyComponent extends Component {
  render() {
    return (
      <div>
        <Component1></Component1>
        <Component2></Component2>
        <Component3></Component3>
      </div>
    );
  }
}

export default MyComponent;
