import React from 'react';

interface ICheckStateState {
  isDone: boolean;
}

export class CheckState extends React.Component<{}, ICheckStateState> {
  constructor(props) {
    super(props);
    this.state = {
      isDone: false
    };
  }

  public render() {
    if (this.state.isDone) {
      return <div>Done</div>;
    } else {
      return <div>Not Done</div>;
    }
  }
}
