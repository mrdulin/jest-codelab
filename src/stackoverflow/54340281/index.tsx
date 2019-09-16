import React from 'react';
import { compose, Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { removeFilter, shipmentsPagination, toggleFiltersModal, setFilters, setCSVDataAction } from './actionCreators';

class GetShipments extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <div>unit test coverage</div>;
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    removeFilterHandler: filterKey => {
      dispatch(removeFilter(filterKey));
    },
    shipmentsPaginationHandler: pagination => {
      dispatch(shipmentsPagination(pagination)); // LINE NEEDS COVERAGE
    },
    toggleFiltersModalHandler: () => {
      dispatch(toggleFiltersModal()); // LINE NEEDS COVERAGE
    },
    setFiltersHandler: filters => {
      dispatch(setFilters(filters)); // LINE NEEDS COVERAGE
    },
    setCSVDataHandler: data => {
      dispatch(setCSVDataAction(data)); // LINE NEEDS COVERAGE
    }
  };
};

export default compose(connect(mapDispatchToProps)(GetShipments));
