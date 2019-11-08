import { FiltersStateHelper } from './filters-state.helper';

type SearchViewState = any;

export const SearchViewStateHelper = {
  toggleFilters: <T extends SearchViewState>(state: T): T => ({
    ...state,
    filters: FiltersStateHelper.toggleFilters(state.filters)
  })
  // ... more methods
};
