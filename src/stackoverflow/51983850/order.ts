import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchOrdersSuccess = orders => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders
  };
};

export const fetchOrdersFailed = error => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    error
  };
};
export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  };
};

export const fetchOrders = (token, userId) => {
  return dispatch => {
    dispatch(fetchOrdersStart());
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    return axios
      .get('/orders.json' + queryParams)
      .then(resp => {
        dispatch(fetchOrdersSuccess(resp));
      })
      .catch(error => dispatch(fetchOrdersFailed(error)));
  };
};
