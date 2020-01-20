import axios from 'axios';

type BoatSearchFilterParams = any;

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const GET_BOATS = 'https://localhost';

const setFilterParamsAsString = (filterValues) => filterValues;

export const fetchBoats = (userAuthToken: string, filterValues: BoatSearchFilterParams = {}, page: number = 1) => (
  dispatch: any,
) => {
  const filterParams: string = setFilterParamsAsString(filterValues);
  const url = `${GET_BOATS}?${filterParams}&page=${page}`;
  return dispatch({
    types: [FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE],
    promise: axios({
      method: 'get',
      url,
      headers: {
        Authorization: `Token ${userAuthToken}`,
      },
    }),
  });
};
