import React from 'react';

enum STATUS {
  HOVERED = 'hovered',
  NORMAL = 'normal'
}

interface ILinkState {
  class: STATUS;
}

export default class Link extends React.Component<any, ILinkState> {
  constructor(props) {
    super(props);

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);

    this.state = {
      class: STATUS.NORMAL
    };
  }

  public render() {
    return (
      <a
        className={this.state.class}
        href={this.props.page || '#'}
        onMouseEnter={this._onMouseEnter}
        onMouseLeave={this._onMouseLeave}>
        {this.props.children}
      </a>
    );
  }
  private _onMouseEnter() {
    this.setState({ class: STATUS.HOVERED });
  }

  private _onMouseLeave() {
    this.setState({ class: STATUS.NORMAL });
  }
}
