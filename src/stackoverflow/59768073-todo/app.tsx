import React from 'react';

interface Props {
  initialState: object;
}

export class App extends React.Component<Props> {
  componentDidMount() {
    this.onMountFuction('The Component Did Mount');
  }

  onMountFuction(msg: string) {
    console.log(msg);
  }

  render() {
    return <div>app</div>;
  }
}
