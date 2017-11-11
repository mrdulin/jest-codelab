import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

export interface IState {
  global: {
    accountGuid: any;
  };
  shipments: {
    shipmentsCSV: any;
  };
}

export interface IStateProps {
  accountGuid: any;
  shipmentsCSV: any;
}

interface IOwnProps {
  t(k: any): any;
}

type Props = IStateProps & IOwnProps;

class DownloadCSVItem extends React.Component<Props> {
  public static defaultProps: Props = {
    t: k => k,
    accountGuid: '',
    shipmentsCSV: {
      itemsCount: 0,
      shipments: []
    }
  };
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return <div>54245218</div>;
  }
}

const mapStateToProps = (state: IState): IStateProps => {
  return {
    accountGuid: state.global.accountGuid,
    shipmentsCSV: state.shipments.shipmentsCSV
  };
};

export default compose(connect<IStateProps, {}, IOwnProps, IState>(mapStateToProps))(DownloadCSVItem);
