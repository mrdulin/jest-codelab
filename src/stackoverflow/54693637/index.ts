import fetch from 'node-fetch';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const logError = (name, message) => console.error(`name: ${name}, message: ${message}`);
const get = url => fetch(url);

export const LOAD_CURRENT_USER_REQUEST = 'LOAD_CURRENT_USER_REQUEST';
export const LOAD_CURRENT_USER_SUCCESS = 'LOAD_CURRENT_USER_SUCCESS';
export const LOAD_CURRENT_USER_FAILURE = 'LOAD_CURRENT_USER_FAILURE';

export const loadCurrentUserRequest = () => ({
  type: LOAD_CURRENT_USER_REQUEST
});

export const loadCurrentUserSuccess = (payload: any) => ({
  type: LOAD_CURRENT_USER_SUCCESS,
  payload
});

export const loadCurrentUserFailure = (payload: any) => ({
  type: LOAD_CURRENT_USER_FAILURE,
  payload
});

export const loadCurrentUser = () => {
  return async (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    dispatch(loadCurrentUserRequest());
    try {
      const response = await get(`api/currentuser`);
      if (!response.ok) {
        dispatch(loadCurrentUserFailure({ type: null, message: 'error' }));
      } else {
        const json = await response.json();
        dispatch(loadCurrentUserSuccess(json));
      }
      return response;
    } catch (err) {
      dispatch(loadCurrentUserFailure({ type: err.name, message: err.message }));
      logError(err.name, err.message);
      return err;
    }
  };
};
