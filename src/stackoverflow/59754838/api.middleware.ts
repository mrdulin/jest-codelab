import { Middleware } from 'redux';
import axios from 'axios';
import { API_REQUEST } from './actionTypes';
import { apiSuccess, apiError } from './actionCreator';

export const apiMiddleware: Middleware = ({ dispatch }) => (next) => async (action): Promise<void> => {
  next(action);

  if (action.type.includes(API_REQUEST)) {
    const body = action.payload;
    const { url, method, feature } = action.meta;

    try {
      const response = await axios({ method, url, data: body });
      dispatch(apiSuccess({ response, feature }));
    } catch (error) {
      console.error(error);
      dispatch(apiError({ error, feature }));
    }
  }
};
