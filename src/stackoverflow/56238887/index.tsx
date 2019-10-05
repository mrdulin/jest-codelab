import React, { Component } from 'react';
import * as PolicyModels from './PolicyModels';

export interface IEditPolicyProps {
  user: any;
  services: any[];
}

interface IEditPolicyState {
  data: {
    WorkID: string;
    Choices: string;
    WORK_CONTEXT: any[];
  };
  Policy: string;
}

export class EditPolicy extends Component<IEditPolicyProps, IEditPolicyState> {
  constructor(props: IEditPolicyProps) {
    super(props);
    this.state = {
      data: {
        WorkID: '',
        Choices: '',
        WORK_CONTEXT: []
      },
      Policy: ''
    };
  }

  public async patchPolicy() {
    const { user, services } = this.props;
    const { data } = this.state;
    const body = {
      Policies: [
        {
          Choices: data.Choices || ''
        }
      ]
    };
    PolicyModels.patchWork({
      user,
      services,
      body,
      id: this.state.Policy
    });
    const contextBody = data.WORK_CONTEXT[0];
    const Context_UID = '';
    const method = 'POST';
    if (contextBody) {
      //
      if (contextBody.Context_UID) {
        // If has UID, Patch
        PolicyModels.patchWorkContext({
          user,
          services,
          body: contextBody,
          id: contextBody.Context_UID
        });
      } else {
        contextBody.WorkID = this.state.data.WorkID;
        PolicyModels.patchWorkContext({
          user,
          services,
          body: contextBody,
          id: contextBody.Context_UID
        });
      }
    }
  }

  public render() {
    return <div>Expected mock function to have been called -Async</div>;
  }
}
