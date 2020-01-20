import { API_REQUEST_SUCCESS, API_REQUEST_FAILURE } from './actionTypes';

export function apiSuccess(data) {
  return {
    type: API_REQUEST_SUCCESS,
    ...data,
  };
}
export function apiError(data) {
  return {
    type: API_REQUEST_FAILURE,
    ...data,
  };
}
