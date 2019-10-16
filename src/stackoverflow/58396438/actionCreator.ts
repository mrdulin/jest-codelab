import { apiCall } from './apiCall';

export const ACTION_TYPE = 'ACTION_TYPE';

export const someAction = id => async dispatch => {
  try {
    const { data } = await apiCall(id);
    dispatch({ type: ACTION_TYPE, payload: data });
  } catch (err) {
    throw new Error(err);
  }
};
