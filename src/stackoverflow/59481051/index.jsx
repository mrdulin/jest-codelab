import React from 'react';

export default class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <button className="btn" onClick={this.toggleClick}>
        <div />
      </button>
    );
  }
}
