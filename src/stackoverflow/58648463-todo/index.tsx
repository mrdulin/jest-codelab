import React, { Component } from 'react';
import svc from './contants/svc';

class MFASection extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      enabledMFA: true
    };
  }
  componentDidMount() {
    return svc.getMe().then(res => {
      console.log(res);
      this.setState({ enabledMFA: res.data.mfa_enabled });
    });
  }
  render() {
    return <div>enabledMFA: {this.state.enabledMFA}</div>;
  }
}

export default MFASection;
