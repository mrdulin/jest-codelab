import React, { Component } from 'react';

export class SomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: '',
      fruit: '',
      language: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  public render() {
    return (
      <div className="tab-input-container">
        <select className="shape-dropdown" onChange={this.handleChange} name="animal">
          <option value="">--select option 1--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <select className="shape-dropdown" onChange={this.handleChange} name="fruit">
          <option value="">--select option 2--</option>
          <option value="apple">Dog</option>
          <option value="orange">Cat</option>
        </select>
        <select className="shape-dropdown" onChange={this.handleChange} name="language">
          <option value="">--select option 3--</option>
          <option value="jest">Dog</option>
          <option value="ts">Cat</option>
        </select>
      </div>
    );
  }

  private handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const key = e.target.name;
    const value = e.target.getAttribute('value');
    const otherValue = e.target.value;

    this.setState({ [key]: value });
  }
}
