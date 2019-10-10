import React from 'react';
import Login from './';
import $ from 'jquery';
import { shallow } from 'enzyme';
import console = require('console');

describe('Login', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should get data', async () => {
    const ajaxSpy = jest.spyOn($, 'ajax');
    const wrapper = shallow(<Login></Login>);
    const instance = wrapper.instance();
    (instance as any).getData();
    expect(wrapper.text()).toBe('Login');
    expect(ajaxSpy).toBeCalledWith({
      type: 'GET',
      url: 'https://github.com/mrdulin',
      // tslint:disable-next-line: no-string-literal
      success: instance['handleSuccess'],
      // tslint:disable-next-line: no-string-literal
      error: instance['handleError']
    });
  });

  test('handleSuccess', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Login></Login>);
    const instance = wrapper.instance();
    // tslint:disable-next-line: no-string-literal
    instance['handleSuccess']('some data');
    expect(logSpy).toBeCalledWith('some data');
  });

  test('handleError', () => {
    window.alert = jest.fn();
    const wrapper = shallow(<Login></Login>);
    const instance = wrapper.instance();
    // tslint:disable-next-line: no-string-literal
    instance['handleError']();
    expect(window.alert).toBeCalledWith('ERROR');
  });
});
