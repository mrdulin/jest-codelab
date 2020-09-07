import { createStore, applyMiddleware } from 'redux';

function rootReducer(state) {
  return state;
}

export default (middlewares) => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
