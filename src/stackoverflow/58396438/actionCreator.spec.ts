import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { someAction } from './actionCreator';
import { AnyAction } from 'redux';
import * as API from './apiCall';

const mws = [thunk];
const mockStore = createMockStore<{}, ThunkDispatch<{}, any, AnyAction>>(mws);

describe('someAction', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should handle errors', async () => {
    const errMsg = 'Unauthorized';
    const apiSpy = jest.spyOn(API, 'apiCall').mockRejectedValueOnce(errMsg);
    const id = '1';
    const store = mockStore({});
    await expect(store.dispatch(someAction(id))).rejects.toThrow(errMsg);
    expect(apiSpy).toBeCalledWith(id);
  });

  test('should dispatch action correctly', () => {
    expect.assertions(2);
    const apiSpy = jest.spyOn(API, 'apiCall').mockResolvedValueOnce({ data: 'mocked data' });
    const id = '1';
    const store = mockStore({});
    return store.dispatch(someAction(id)).then(() => {
      expect(store.getActions()).toEqual([{ type: 'ACTION_TYPE', payload: 'mocked data' }]);
      expect(apiSpy).toBeCalledWith(id);
    });
  });
});
