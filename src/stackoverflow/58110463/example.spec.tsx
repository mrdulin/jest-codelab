import React from 'react';
import { shallow } from 'enzyme';
import { Login, ILoginProps } from './example';
import * as service from './service';

describe('Login', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  const mockedProps: ILoginProps = { handleSubmit: jest.fn() };
  const mockedFormEvent = { preventDefault: jest.fn() };
  const mockedUserLoginResponse = 'mocked data';
  const mockedUserLoginError = new Error('database error');

  it('test login form submit - 1', done => {
    const userLoginSpy = jest.spyOn(service, 'userLogin').mockResolvedValueOnce(mockedUserLoginResponse);
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Login {...mockedProps}></Login>);
    wrapper.find('form').simulate('submit', mockedFormEvent);

    setImmediate(() => {
      expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
      expect(mockedProps.handleSubmit).toBeCalledTimes(1);
      expect(wrapper.state('isLoggedIn')).toBeTruthy();
      expect(userLoginSpy).toBeCalledWith({});
      expect(logSpy).toBeCalledWith(mockedUserLoginResponse);
      done();
    });
  });

  it('test login form submit - 2', async () => {
    const userLoginSpy = jest.spyOn(service, 'userLogin').mockResolvedValueOnce(mockedUserLoginResponse);
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Login {...mockedProps}></Login>);
    await (wrapper.instance() as any).handleSubmit(mockedFormEvent);
    expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
    expect(mockedProps.handleSubmit).toBeCalledTimes(1);
    expect(wrapper.state('isLoggedIn')).toBeTruthy();
    expect(userLoginSpy).toBeCalledWith({});
    expect(logSpy).toBeCalledWith(mockedUserLoginResponse);
  });

  it('test login error - 1', done => {
    const userLoginSpy = jest.spyOn(service, 'userLogin').mockRejectedValueOnce(mockedUserLoginError);
    const errorLogSpy = jest.spyOn(console, 'error');
    const wrapper = shallow(<Login {...mockedProps}></Login>);
    wrapper.find('form').simulate('submit', mockedFormEvent);

    setImmediate(() => {
      expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
      expect(mockedProps.handleSubmit).toBeCalledTimes(1);
      expect(wrapper.state('isLoggedIn')).toBeTruthy();
      expect(userLoginSpy).toBeCalledWith({});
      expect(errorLogSpy).toBeCalledWith(mockedUserLoginError);
      done();
    });
  });
});
