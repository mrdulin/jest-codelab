import { LOGIN_SUCCESS, LOGIN_ERROR } from './auth';
import * as actions from './auth';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase from './firebase';

jest.mock('./firebase.ts', () => {
  return {
    auth: jest.fn().mockReturnThis(),
    signInWithEmailAndPassword: jest.fn().mockReturnThis()
  };
});

const initialState = {};
const middlewares = [thunk];
const mockStore = createMockStore(middlewares);

describe('auth', () => {
  const form = { email: 'test@test.com', password: 'test' };
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('#onLogin', () => {
    it('should login success', () => {
      expect.assertions(2);
      const mockedUser = { email: 'test@test.com', emailVerified: true, displayName: 'test' };
      (firebase.auth().signInWithEmailAndPassword as jest.MockedFunction<
        typeof firebase.signInWithEmailAndPassword
      >).mockResolvedValueOnce(mockedUser);

      const expectedAction = [
        {
          type: LOGIN_SUCCESS,
          payload: { user: mockedUser }
        }
      ];

      return store.dispatch(actions.onLogin(form)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(form.email, form.password);
      });
    });

    it('should login error', () => {
      expect.assertions(2);
      const mockedError = new Error('firebase error');
      (firebase.auth().signInWithEmailAndPassword as jest.MockedFunction<
        typeof firebase.signInWithEmailAndPassword
      >).mockRejectedValueOnce(mockedError);

      const expectedAction = [
        {
          type: LOGIN_ERROR,
          payload: mockedError,
          error: true
        }
      ];

      return store.dispatch(actions.onLogin(form)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        expect(firebase.auth().signInWithEmailAndPassword).toBeCalledWith(form.email, form.password);
      });
    });
  });
});
