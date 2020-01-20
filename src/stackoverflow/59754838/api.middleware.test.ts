import { apiMiddleware } from './api.middleware';
import axios from 'axios';
import { MiddlewareAPI } from 'redux';
import { API_REQUEST, API_REQUEST_SUCCESS, API_REQUEST_FAILURE } from './actionTypes';

jest.mock('axios', () => jest.fn());

describe('59754838', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe('#apiMiddleware', () => {
    describe('Unit test', () => {
      it('should dispatch api success action', async () => {
        const store: MiddlewareAPI = { dispatch: jest.fn(), getState: jest.fn() };
        const next = jest.fn();
        const action = {
          type: API_REQUEST,
          payload: {},
          meta: { url: 'http://localhost', method: 'get', feature: 'feature' },
        };
        const mResponse = { name: 'user name' };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await apiMiddleware(store)(next)(action);
        expect(next).toBeCalledWith(action);
        expect(axios).toBeCalledWith({ method: action.meta.method, url: action.meta.url, data: action.payload });
        expect(store.dispatch).toBeCalledWith({
          type: API_REQUEST_SUCCESS,
          response: mResponse,
          feature: action.meta.feature,
        });
      });

      it('should dispatch api error action', async () => {
        const store: MiddlewareAPI = { dispatch: jest.fn(), getState: jest.fn() };
        const next = jest.fn();
        const action = {
          type: API_REQUEST,
          payload: {},
          meta: { url: 'http://localhost', method: 'get', feature: 'feature' },
        };
        const mError = new Error('network error');
        (axios as jest.Mocked<any>).mockRejectedValueOnce(mError);
        await apiMiddleware(store)(next)(action);
        expect(next).toBeCalledWith(action);
        expect(axios).toBeCalledWith({ method: action.meta.method, url: action.meta.url, data: action.payload });
        expect(store.dispatch).toBeCalledWith({
          type: API_REQUEST_FAILURE,
          error: mError,
          feature: action.meta.feature,
        });
      });
    });
  });
});
