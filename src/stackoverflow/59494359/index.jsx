import React, { Component } from 'react';

class SomeComponent extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0 });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}></form>
      </div>
    );
  }
}

export default SomeComponent;
