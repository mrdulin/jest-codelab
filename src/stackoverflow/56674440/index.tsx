import React from 'react';
import * as Models from './Models';

export interface IPornComponentProps {
  accountToEdit: string;
  user: object;
  services: any[];
  FirmId: string;
}

interface IPornComponentState {
  AccountName: string;
  AccountTitle: string;
  AccountStatus: {
    value: string;
  };
  StartingStatus: string;
}

export class PornComponent extends React.Component<IPornComponentProps, IPornComponentState> {
  constructor(props: IPornComponentProps) {
    super(props);
    this.state = {
      AccountName: '',
      AccountTitle: '',
      AccountStatus: {
        value: ''
      },
      StartingStatus: ''
    };
  }

  public async patchAccount() {
    const { user, services, FirmId } = this.props;
    const StatusChanged = this.state.AccountStatus && this.state.AccountStatus.value !== this.state.StartingStatus;
    const AccountBody = {
      AccountName: this.state.AccountName,
      AccountTitle: this.state.AccountTitle,
      AccountStatusDate: '2019-01-01'
    };
    if (StatusChanged) {
      AccountBody.AccountStatusDate = new Date()
        .toISOString()
        .slice(0, 19)
        .concat('Z');
    }
    const response = await Models.patchAccount({
      user,
      services,
      body: AccountBody,
      firmId: FirmId,
      id: this.props.accountToEdit
    });
    if (!response.error) {
      return true;
    } else {
      return false;
    }
  }

  public render() {
    return <div>Unit Test</div>;
  }
}
