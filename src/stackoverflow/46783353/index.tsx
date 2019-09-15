import React, { Component } from 'react';

interface IAppState {
  x: number;
  y: number;
  command: string;
  facing: string;
  init: boolean;
}

export class App extends Component<any, IAppState> {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      command: '',
      facing: 'EAST',
      init: false
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  public render() {
    const { x, y } = this.state;
    return (
      <div onKeyDown={this.handleKeyDown}>
        x:{x},y:{y}
      </div>
    );
  }

  private handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    console.log('handlekeydown');

    switch (e.keyCode) {
      case 37:
        console.log('key left');
        this.setState({ x: this.state.x - 1 });
        break;
      case 38:
        console.log('key up');
        this.setState({ y: this.state.y + 1 });
        break;
      case 39:
        console.log('key right');
        this.setState({ x: this.state.x + 1 });
        break;
      case 40:
        console.log('key down');
        this.setState({ y: this.state.y - 1 });
        break;
    }
  };
}
