import { goToNewExperience, IState, UPDATE_EXP, ISessionRequest } from './actionCreators';
import createMockStore from 'redux-mock-store';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = createMockStore<IState, ThunkDispatch<IState, any, AnyAction>>(middlewares);

describe('goToNewExperience', () => {
  it('update new experience', () => {
    const initialState = { isNewExp: true };
    const store = mockStore(initialState);
    return store.dispatch(goToNewExperience()).then(() => {
      expect(store.getActions()).toEqual([{ type: UPDATE_EXP, payload: { experience: 'NewExperience' } }]);
    });
  });

  it('update error experience', () => {
    const initialState = { isNewExp: false };
    const store = mockStore(initialState);
    const request: ISessionRequest = { isError: true };
    return store.dispatch(goToNewExperience(request)).then(() => {
      expect(store.getActions()).toEqual([{ type: UPDATE_EXP, payload: { experience: 'ErrorExperience' } }]);
    });
  });

  it('do nothing', () => {
    const initialState = { isNewExp: false };
    const store = mockStore(initialState);
    const request: ISessionRequest = { isError: false };
    return store.dispatch(goToNewExperience(request)).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
