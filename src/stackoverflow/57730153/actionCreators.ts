import axios from 'axios';

export const getOddGroups = () => {
  return dispatch => {
    return axios
      .get('/api/tables/oddgroups')
      .then(results => {
        dispatch({ type: 'GET_ODD_GROUPS', payload: results.data });
      })
      .catch(err => {
        dispatch({ type: 'GET_ERRORS', payload: err.response.message });
      });
  };
};
