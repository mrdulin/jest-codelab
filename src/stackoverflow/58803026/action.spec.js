import * as actionTypes from './action';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mws = [thunk];
const mockStore = createMockStore(mws);
const store = mockStore({});

describe('fetchGitHubDataAsync', () => {
  it('Dispatches BOOKS_SUCCESS after fetching books', () => {
    expect.assertions(2);
    const mJson = { items: [1, 2, 3, 4, 5, 6] };
    const mResponse = { json: jest.fn().mockResolvedValueOnce(mJson) };
    global.fetch = jest.fn().mockResolvedValueOnce(mResponse);
    const expectedActions = [{ type: 'FETCH_GITHUB_DATA', payload: [1, 2, 3, 4, 5] }];
    return store.dispatch(actionTypes.fetchGitHubDataAsync()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(global.fetch).toBeCalledWith('https://api.github.com/search/topics?q=javascript', {
        headers: {
          Accept: 'application/vnd.github.mercy-preview+json'
        }
      });
    });
  });
});
