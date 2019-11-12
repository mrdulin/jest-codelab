import React, { Component } from 'react';

export interface ISomeComponentState {
  direction: string;
  scrollRef: {
    current: HTMLElement | null;
  };
}

class SomeComponent extends Component<any, ISomeComponentState> {
  constructor(props) {
    super(props);
    this.state = {
      direction: 'right',
      scrollRef: {
        current: null
      }
    };
  }
  scrollToTheEnd = (direction: string) => {
    if (direction !== 'right' && direction !== 'left') return;
    let walk = direction === 'right' ? 3000 : -3000;
    const slider: HTMLElement = this.state.scrollRef.current as HTMLElement;
    slider.scrollBy(walk, 0);
  };

  render() {
    return <button onDoubleClick={() => this.scrollToTheEnd(this.state.direction)}>scroll to the end</button>;
  }
}

export default SomeComponent;
