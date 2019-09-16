import React from 'react';
import './Translate';

interface ISomeComponentProps {
  title: string;
}

class SomeComponent extends React.Component<ISomeComponentProps> {
  public render() {
    const title = (global as any).Translator.trans(this.props.title);
    return <div>title: {title}</div>;
  }
}

export { SomeComponent };
