import { someMethod, ASSESSMENT } from './actionCreators';
import createMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const middlewares = [thunk];
const mockStore = createMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

describe('someMethod', () => {
  it('t1', () => {
    const intialState = {};
    const store = mockStore(intialState);
    const collections = [
      { libraryUrl: 'aa', bookUrl: 'a', libraryId: '1' },
      { libraryUrl: 'bb', bookUrl: 'b', libraryId: '2' }
    ];
    const expectedActions = [
      {
        type: ASSESSMENT.BOOK.GET,
        payload: {
          data: {
            boolURL: collections[0].bookUrl,
            libraryURL: collections[0].libraryUrl,
            libraryId: collections[0].libraryId
          }
        }
      },
      { type: ASSESSMENT.BOOK.ADD, payload: { boolURL: collections[0].bookUrl, libraryId: collections[0].libraryId } },
      {
        type: ASSESSMENT.BOOK.GET,
        payload: {
          data: {
            boolURL: collections[1].bookUrl,
            libraryURL: collections[1].libraryUrl,
            libraryId: collections[1].libraryId
          }
        }
      },
      { type: ASSESSMENT.BOOK.ADD, payload: { boolURL: collections[1].bookUrl, libraryId: collections[1].libraryId } }
    ];
    store.dispatch(someMethod({ collections }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
