import React, { Component } from 'react';
import fetch from 'node-fetch';

interface ISomeComponentState {
  state1: string;
  state2: string;
}

export class SomeComponent extends Component<any, ISomeComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      state1: 'jest',
      state2: ''
    };
  }

  public async method1() {
    if (this.state.state1 !== '') {
      await fetch('api')
        .then(resp => resp.json())
        .then(data => {
          this.setState({ state2: data });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  public render() {
    return <div>test</div>;
  }
}
