import React, { Component } from 'react';

interface ISomeComponentProps {
  object: {
    objectId: string;
  };
}

interface ISomeComponentDispatchProps {
  fetchObjectDetails(objectId: string): void;
}

type Props = ISomeComponentProps & ISomeComponentDispatchProps;

export class SomeCompoennt extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public componentWillReceiveProps(nextProps: Readonly<Props>) {
    const { object: newObject } = nextProps;
    const { object } = this.props;
    if (object.objectId !== newObject.objectId) {
      this.reloadObjectDetails(newObject.objectId);
    }
  }

  public render() {
    return <div>{this.props.object.objectId}</div>;
  }

  private reloadObjectDetails(objectId: string) {
    const { fetchObjectDetails } = this.props;
    if (objectId && objectId !== '-1') {
      fetchObjectDetails(objectId);
    }
  }
}
