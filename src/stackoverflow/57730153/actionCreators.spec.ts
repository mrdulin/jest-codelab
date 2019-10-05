import { getOddGroups } from './actionCreators';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
import { AnyAction } from 'redux';

const middlewares = [thunk];
const mockStore = createMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

jest.mock('axios', () => {
  return {
    get: jest.fn()
  };
});

describe('actionCreators', () => {
  describe('#getOddGroups', () => {
    let store;
    beforeEach(() => {
      const initialState = {};
      store = mockStore(initialState);
    });
    it('should get odd groups correctly', () => {
      const mockedResponse = { data: 'mocked data' };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce(mockedResponse);
      const expectedActions = [{ type: 'GET_ODD_GROUPS', payload: mockedResponse.data }];
      return store.dispatch(getOddGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/api/tables/oddgroups');
      });
    });

    it('should get odd groups error', () => {
      const mockedError = {
        response: {
          message: 'some error'
        }
      };
      (axios.get as jest.MockedFunction<typeof axios.get>).mockRejectedValueOnce(mockedError);
      const expectedActions = [{ type: 'GET_ERRORS', payload: mockedError.response.message }];
      return store.dispatch(getOddGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/api/tables/oddgroups');
      });
    });
  });
});
