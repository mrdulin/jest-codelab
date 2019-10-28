import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import simple from './simple';
import * as firebase from 'firebase';

const mockStore = configureMockStore([thunk]);
const store = mockStore();
const FirebaseAuthProps = {};

describe('<simple />', () => {
  test('simulate click button', () => {
    const GoogleAuthProviderSpy = jest.fn().mockReturnValueOnce({});
    const signInWithRedirectSpy = jest.fn();
    jest
      .spyOn(firebase, 'auth')
      .mockImplementationOnce(() => {
        return { signInWithRedirect: signInWithRedirectSpy } as any;
      })
      .mockReturnValueOnce({ GoogleAuthProvider: GoogleAuthProviderSpy } as any);

    const withProvider = (
      <Provider store={store}>
        <simple.WrappedComponent {...FirebaseAuthProps} />
      </Provider>
    );

    const wrapper = mount(withProvider);
    wrapper.find('button').simulate('click');
    expect(GoogleAuthProviderSpy).toBeCalled();
    expect(signInWithRedirectSpy).toBeCalledWith({});
  });
});
