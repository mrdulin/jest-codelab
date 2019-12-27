import React, { Component } from 'react';

class SomeCompoennt extends Component {
  constructor(props) {
    super(props);
    this.state = { authUrl: '' };
    this.props.getPaypalAuthUrl().then((result) => {
      this.setState({ authUrl: result });
    });
  }
  render() {
    return <div>some component</div>;
  }
}

export default SomeCompoennt;
