import { createStore } from 'redux';

function reducer(state = {}) {
  return state;
}

export const store = createStore(reducer);

export const GET_DATA = 'GET_DATA';

export function requestForSomething(number) {
  store.dispatch(getData(number));
}

export const getData = number => {
  const productDetails = someFunction(number);
  return {
    type: GET_DATA,
    productDetails
  };
};

export const someFunction = number => {
  return number;
};
