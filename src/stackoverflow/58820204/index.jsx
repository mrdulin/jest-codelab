import React, { Component } from 'react';

class AutoComplete extends Component {
  render() {
    return (
      <div>
        <ul className={this.props.className} onClick={this.props.onClick}>
          {this.props.match.map(item => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
