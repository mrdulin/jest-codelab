import { discount } from './discount';

export const ADD_DISCOUNT = {
  triplet: 'triplet'
};

export const addDiscount = ({ code }) => (dispatch, getState) => {
  const { id } = getState().token;

  return dispatch({
    apiCall: discount.put({ body: { code }, id }),
    types: ADD_DISCOUNT.triplet
  });
};
