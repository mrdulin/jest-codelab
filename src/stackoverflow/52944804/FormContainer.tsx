import React, { Component } from 'react';

interface IFormContainerOwnProps {
  children: React.ReactElement[];
  onSubmit(e: React.FormEvent<HTMLFormElement>): any;
}

export class FormContainer extends Component<IFormContainerOwnProps> {
  constructor(props: IFormContainerOwnProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>{this.props.children}</form>
      </div>
    );
  }
}
