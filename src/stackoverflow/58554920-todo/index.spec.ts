import { signInWithgoogle } from './';
import firebase from 'firebase';

jest.mock('firebase', () => {
  const auth = jest.fn();
  const mAuth = { signInWithRedirect: jest.fn() };
  // @ts-ignore
  auth.GoogleAuthProvider = jest.fn();
  // @ts-ignore
  auth.Auth = jest.fn(() => mAuth);
  return { auth };
});

describe('signInWithgoogle', () => {
  it('should mock firebase with typescript namespace', () => {
    // @ts-ignore
    firebase.auth.mockImplementation(() => new firebase.auth.Auth());
    signInWithgoogle();
    expect(firebase.auth.GoogleAuthProvider).toBeCalledTimes(1);
    expect(firebase.auth).toBeCalledTimes(1);
    expect(firebase.auth().signInWithRedirect).toBeCalledTimes(1);
  });
});
