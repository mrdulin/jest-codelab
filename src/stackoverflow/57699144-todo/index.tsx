import React, { Component, RefObject } from 'react';
import { connect } from 'react-redux';

export class MyComponent extends Component<any> {
  public element: RefObject<HTMLDivElement>;
  constructor(props) {
    super(props);
    this.element = React.createRef();
  }

  componentDidMount() {
    if (this.element.current) {
      console.log(this.element.current.addEventListener);
      this.element.current.addEventListener('rowClicked', this.onRowClicked);
    }
  }

  onRowClicked() {
    console.log('onRowClicked');
  }

  render() {
    return <div ref={this.element}>test div</div>;
  }
}

const ConnectedMyComponent = connect()(MyComponent);
export default ConnectedMyComponent;
