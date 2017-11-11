import React from 'react';

interface ICustomComponentOwnProps {
  movies: any[];
}

class CustomComponent extends React.Component<ICustomComponentOwnProps> {
  public render() {
    return <div>custom component</div>;
  }
}

export { CustomComponent };
