import React from 'react';
import { mount } from 'enzyme';
import $ from 'jquery';
import Login from './';

describe('Login', () => {
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = mount(<Login />);
    instance = wrapper.instance() as any;
    jest.restoreAllMocks();
  });
  test('Data should load', () => {
    const ajaxSpy = jest.spyOn($, 'ajax');
    expect(wrapper.text()).toBe('some stuff');
    instance.getData();
    expect(ajaxSpy).toBeCalledWith({
      type: 'GET',
      url: 'http://stackoverflow.com',
      success: expect.any(Function),
      error: expect.any(Function)
    });
  });

  test('should handle success', () => {
    const mUser = { userId: 1 };
    const logSpy = jest.spyOn(console, 'log');
    instance.handleSuccess(mUser);
    expect(logSpy).toBeCalledWith(mUser);
  });

  test('should handle error', () => {
    const logSpy = jest.spyOn(console, 'log');
    instance.handleError();
    expect(logSpy).toBeCalledWith('ERROR');
  });
});
