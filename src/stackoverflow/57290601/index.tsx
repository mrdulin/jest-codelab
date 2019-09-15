import React, { Component } from 'react';
import { connect } from 'react-redux';

interface ITestComponentProps {
  blah: any;
  store: any;
}

export class TestComponent extends Component<ITestComponentProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    return <div>{this.props.blah}</div>;
  }
}

function mapStateToProps(state) {
  return { blah: state };
}

export default connect(mapStateToProps)(TestComponent);
