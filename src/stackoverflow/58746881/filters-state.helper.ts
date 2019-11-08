type FiltersState = any;

export const FiltersStateHelper = {
  toggleFilters: <T extends FiltersState>(state: T): T => ({
    ...state,
    isOpen: !state.isOpen
  })
};
