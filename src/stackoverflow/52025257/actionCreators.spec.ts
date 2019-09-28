import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import * as actions from './actionCreators';
import followApi from './followApi';

jest.mock('./followApi.ts', () => {
  return {
    handleFavorite: jest.fn()
  };
});

type State = any;
const middlewares = [thunk];
const mockStore = configureMockStore<State, ThunkDispatch<State, undefined, AnyAction>>(middlewares);
const store = mockStore();

describe('followings actions', () => {
  beforeEach(() => {
    store.clearActions();
    jest.resetAllMocks();
  });
  it('dispatches the HANDLE_FAVORITE_SUCCESS action', () => {
    expect.assertions(2);
    const mockedHandleFavoritePayload = {
      followingInfoId: '1',
      checked: true
    };
    (followApi.handleFavorite as jest.MockedFunction<typeof followApi.handleFavorite>).mockResolvedValueOnce(
      mockedHandleFavoritePayload
    );
    const data = 'jest';
    const expectedActions = [
      {
        type: 'HANDLE_FAVORITE_SUCCESS',
        payload: {
          followingInfoId: '1',
          checked: true
        }
      }
    ];
    return store.dispatch(actions.handleFavorite(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(followApi.handleFavorite).toBeCalledWith(data);
    });
  });

  it('dispatches the ERROR action', () => {
    const mockedhHndleFavoriteError = new Error('network error');
    (followApi.handleFavorite as jest.MockedFunction<typeof followApi.handleFavorite>).mockRejectedValueOnce(
      mockedhHndleFavoriteError
    );
    const data = 'jest';
    const expectedActions = [
      {
        type: 'ERROR',
        payload: mockedhHndleFavoriteError
      }
    ];
    return store.dispatch(actions.handleFavorite(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(followApi.handleFavorite).toBeCalledWith(data);
    });
  });
});
