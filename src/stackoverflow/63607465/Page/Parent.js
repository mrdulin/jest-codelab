import React from 'react';
import Child from './Children';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Child />;
  }
}
