import React from 'react';
import SomeComponent from './';
import { shallow } from 'enzyme';
import $ from 'jquery';

jest.mock('jquery', () => {
  const m$ = {
    on: jest.fn(),
  };
  return jest.fn(() => m$);
});

describe('36082197', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    const eventHandlerMap = {};
    ($().on as jest.MockedFunction<any>).mockImplementation((event, handler) => {
      eventHandlerMap[event] = handler;
    });
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    const instance = wrapper.instance();
    expect(wrapper.text()).toBe('some component');
    expect($).toBeCalledWith(window);
    // tslint:disable-next-line: no-string-literal
    expect($(window).on).toBeCalledWith('resize', instance['resizeEventHandler']);
    eventHandlerMap['resize']();
    expect(logSpy).toBeCalledWith('resize event handler');
  });
});
