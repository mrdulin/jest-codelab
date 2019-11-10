import React from 'react';
import { mount } from 'enzyme';
import Compo from './';

describe('Compo', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should call funcA', () => {
    const events = {};
    jest.spyOn(window, 'addEventListener').mockImplementation((event, handle, options?) => {
      events[event] = handle;
    });
    jest.spyOn(window, 'removeEventListener').mockImplementation((event, handle, options?) => {
      events[event] = undefined;
    });

    const mProps = { funcA: jest.fn() };
    const wrapper = mount(<Compo {...mProps}></Compo>);
    expect(wrapper.find('button')).toBeDefined();
    events['x']();
    expect(window.addEventListener).toBeCalledWith('x', expect.any(Function), false);
    expect(mProps.funcA).toBeCalledTimes(1);

    wrapper.unmount();
    expect(window.removeEventListener).toBeCalledWith('x', expect.any(Function), false);
  });
});
