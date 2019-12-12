import { Component } from 'react';

export class TestContainer extends Component {
  public myValue = -1;
  constructor(props) {
    super(props);
    this.myValue = 5;
  }
  public render() {
    return null;
  }
}
