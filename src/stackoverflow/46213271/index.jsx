import React, { Component } from 'react';

class Link extends Component {
  onClick(e, tf) {
    e.stopPropagation();
    if (tf) {
      e.preventDefault();
    }
  }
  render() {
    const { tf } = this.props;
    return (
      <a href="/products" onClick={(e) => this.onClick(e, tf)}>
        my link
      </a>
    );
  }
}

export default Link;
