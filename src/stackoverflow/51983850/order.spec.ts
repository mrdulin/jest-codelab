import thunk, { ThunkDispatch } from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as actionTypes from './actionTypes';
import * as actions from './order';
import { AnyAction } from 'redux';
import axios from 'axios';

type State = any;
const middlewares = [thunk];
const mockStore = configureMockStore<State, ThunkDispatch<State, undefined, AnyAction>>(middlewares);

const ordersMock = {
  '-LGyxbZUSr5Q4jboj0uw': {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 1,
      salad: 0
    }
  }
};

describe('order actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('creates FETCH_ORDER_SUCCESS after successfuly fetching orders', () => {
    expect.assertions(2);
    const getSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce(ordersMock);
    const expectedActions = [
      { type: actionTypes.FETCH_ORDERS_START },
      { type: actionTypes.FETCH_ORDERS_SUCCESS, orders: ordersMock }
    ];

    const store = mockStore({ posts: {} });

    return store.dispatch(actions.fetchOrders('TOKEN', 'USER_ID')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(getSpy).toBeCalledWith('/orders.json?auth=TOKEN&orderBy="userId"&equalTo="USER_ID"');
    });
  });
});
