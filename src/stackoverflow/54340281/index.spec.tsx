import { mapDispatchToProps } from './';
import { removeFilter, shipmentsPagination, toggleFiltersModal, setFilters, setCSVDataAction } from './actionCreators';

describe('mapDispatchToProps', () => {
  it('t1', () => {
    const dispatch = jest.fn();
    const actualValue = mapDispatchToProps(dispatch);
    expect(Object.keys(actualValue)).toEqual([
      'removeFilterHandler',
      'shipmentsPaginationHandler',
      'toggleFiltersModalHandler',
      'setFiltersHandler',
      'setCSVDataHandler'
    ]);
    actualValue.removeFilterHandler('some filter key');
    expect(dispatch).toBeCalledWith(removeFilter('some filter key'));
    actualValue.shipmentsPaginationHandler({ page: 1 });
    expect(dispatch).toBeCalledWith(shipmentsPagination({ page: 1 }));
    actualValue.toggleFiltersModalHandler();
    expect(dispatch).toBeCalledWith(toggleFiltersModal());
    actualValue.setFiltersHandler(['filter 1']);
    expect(dispatch).toBeCalledWith(setFilters(['filter 1']));
    actualValue.setCSVDataHandler('some data');
    expect(dispatch).toBeCalledWith(setCSVDataAction('some data'));
  });
});
