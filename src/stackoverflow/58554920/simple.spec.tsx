import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simple from './simple';
import firebase from 'firebase';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const FirebaseAuthProps = {};

jest.mock('firebase', () => {
  const auth = jest.fn();
  const mAuth = { signInWithRedirect: jest.fn() };
  // @ts-ignore
  auth.GoogleAuthProvider = jest.fn();
  // @ts-ignore
  auth.Auth = jest.fn(() => mAuth);
  return { auth };
});

describe('<simple />', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('simulate click button', () => {
    // @ts-ignore
    firebase.auth.mockImplementation(() => new firebase.auth.Auth());
    const withProvider = (
      <Provider store={store}>
        <simple.WrappedComponent {...FirebaseAuthProps} />
      </Provider>
    );

    const wrapper = mount(withProvider);
    expect(wrapper.find('button').text()).toBe('Login with Google');
    wrapper.find('button').simulate('click');
    expect(firebase.auth.GoogleAuthProvider).toBeCalledTimes(1);
    expect(firebase.auth).toBeCalledTimes(1);
    expect(firebase.auth().signInWithRedirect).toBeCalledTimes(1);
  });
});
