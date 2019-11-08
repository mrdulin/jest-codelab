import { SearchViewStateHelper as helper } from './search-view-state.helper';
import { FiltersStateHelper } from './filters-state.helper';

describe('toggleFilters method', () => {
  const state = { filters: { isOpen: false } };

  it('should toggle filters', () => {
    const spy = jest.spyOn(FiltersStateHelper, 'toggleFilters');
    helper.toggleFilters(state);
    expect(spy).toHaveBeenCalled();
    expect(spy).toBeCalledWith({ isOpen: false });
  });
});
