import configureStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { fetchBoats } from './actionCreators';
import axios from 'axios';
import { AnyAction } from 'redux';
const mockedAxios = axios as jest.MockedFunction<typeof axios>;

const initialState = {};
type State = typeof initialState;
const mockStore = configureStore<State, ThunkDispatch<State, any, AnyAction>>([thunk]);
const store = mockStore();

jest.mock('axios', () => jest.fn());

describe("Test the 'Boats' action", () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should have data structure matching the expected structure', () => {
    const respObj: any = {
      results: ['a', 'b', 'c', 'd'],
    };
    mockedAxios.mockResolvedValue(respObj);
    return store.dispatch(fetchBoats('abcabcabc')).then(() => {
      const actions = store.getActions();
      // expect(actions).toEqual()
      console.log(actions);
    });
  });
});
