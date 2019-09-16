import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import * as actions from './';
import { AnyAction } from 'redux';
import fetch from 'node-fetch';

jest.mock('node-fetch', () => jest.fn());

const initialState = {};
type State = typeof initialState;
const middlewares = [thunk];
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>(middlewares);
const store = mockStore(initialState);

describe('action creators', () => {
  describe('#loadCurrentUser', () => {
    afterEach(() => {
      store.clearActions();
    });
    it('load current user success', async () => {
      const userMocked = { userId: 1 };
      (fetch as jest.MockedFunction<any>).mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValueOnce(userMocked)
      });
      await store.dispatch(actions.loadCurrentUser());
      expect(fetch).toBeCalledWith('api/currentuser');
      expect(store.getActions()).toEqual([
        { type: actions.LOAD_CURRENT_USER_REQUEST },
        { type: actions.LOAD_CURRENT_USER_SUCCESS, payload: userMocked }
      ]);
    });

    it('load current user failed', async () => {
      (fetch as jest.MockedFunction<any>).mockResolvedValueOnce({ ok: false });
      await store.dispatch(actions.loadCurrentUser());
      expect(fetch).toBeCalledWith('api/currentuser');
      expect(store.getActions()).toEqual([
        { type: actions.LOAD_CURRENT_USER_REQUEST },
        {
          type: actions.LOAD_CURRENT_USER_FAILURE,
          payload: {
            type: null,
            message: 'error'
          }
        }
      ]);
    });

    it('load current user failed when fetch error', async () => {
      (fetch as jest.MockedFunction<any>).mockRejectedValueOnce(new Error('fetch error'));
      await store.dispatch(actions.loadCurrentUser());
      expect(fetch).toBeCalledWith('api/currentuser');
      expect(store.getActions()).toEqual([
        { type: actions.LOAD_CURRENT_USER_REQUEST },
        {
          type: actions.LOAD_CURRENT_USER_FAILURE,
          payload: {
            type: 'Error',
            message: 'fetch error'
          }
        }
      ]);
    });
  });
});
