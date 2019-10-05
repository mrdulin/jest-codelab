import React, { Component } from 'react';

export default class ToggleCheckbox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  public onChange() {
    console.log('onChange');
  }
  public render() {
    return (
      <div>
        <button onClick={this.onChange}>click</button>{' '}
      </div>
    );
  }
}
