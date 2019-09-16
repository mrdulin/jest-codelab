import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const ERROR_DATA = 'ERROR_DATA';

export const getRequest = a => dispatch => {
  return axios
    .get(a)
    .then(response => {
      dispatch({
        type: FETCH_DATA,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: ERROR_DATA, payload: { status: error.response.status, statusText: error.response.statusText } });
    });
};
