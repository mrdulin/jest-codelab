import React from 'react';
import { runningSince } from './requestService';

interface IHeaderState {
  startDate: string | null | Date;
}

export class Header extends React.Component<{}, IHeaderState> {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null
    };
  }

  public async getDataInicializacao() {
    try {
      const response = await runningSince();
      const dtInicializacao = new Date(response.data.runningSince);
      this.setState(() => ({ startDate: dtInicializacao.toISOString() }));
    } catch (error) {
      console.log(error);
      this.setState(() => ({ startDate: 'Offline' }));
    }
  }

  public componentDidMount() {
    this.getDataInicializacao();
  }

  public render() {
    return <div>{this.state.startDate}</div>;
  }
}
