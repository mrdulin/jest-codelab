import React, { Component } from 'react';
import { DataService } from './DataService';

interface ISomeComponentState {
  name: string;
  key: string;
  expiration: string | null;
}

export class SomeComponent extends Component<any, ISomeComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      key: '',
      expiration: ''
    };
  }

  public async componentDidMount() {
    try {
      const { name, key, expiration } = await DataService.getdata();
      this.setState({ key, expiration, name });
    } catch (err) {
      console.log(err);
    }
  }

  public render() {
    const { name, key, expiration } = this.state;
    return (
      <div>
        key: {key}, name: {name}, expiration: {expiration}
      </div>
    );
  }
}
