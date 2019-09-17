import React, { Component } from 'react';

export interface IButtonOwnProps {
  text: string;
  onClick(): void;
}

export class Button extends Component<IButtonOwnProps> {
  public static defaultProps: IButtonOwnProps = {
    text: '',
    onClick: () => {}
  };
  public render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
