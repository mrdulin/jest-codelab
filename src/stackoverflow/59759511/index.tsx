import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HomePage extends Component {
  state = {};
  async componentDidMount() {
    console.log('a couple of if conditions and an ajax request');
  }

  render() {
    return <div>HomePage</div>;
  }
}

export default connect()(HomePage);
