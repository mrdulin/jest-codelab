const REMOVE_FILTER = 'REMOVE_FILTER';
const SHIPMENTS_PAGINATION = 'SHIPMENTS_PAGINATION';
const TOGGLE_FILTERS_MODAL = 'TOGGLE_FILTERS_MODAL';
const SET_FILTER = 'SET_FILTER';
const SET_CSV_DATA = 'SET_CSV_DATA';

export const removeFilter = (filterKey: string) => ({ type: REMOVE_FILTER, payload: { filterKey } });
export const shipmentsPagination = (pagination: any) => ({ type: SHIPMENTS_PAGINATION, payload: pagination });
export const toggleFiltersModal = () => ({ type: TOGGLE_FILTERS_MODAL });
export const setFilters = (filters: any) => ({ type: SET_FILTER, payload: filters });
export const setCSVDataAction = data => ({ type: SET_CSV_DATA, payload: data });
