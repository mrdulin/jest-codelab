import React from 'react';
import { Component } from './';
import { mount } from 'enzyme';

describe('Component', () => {
  test('should handle change event', async () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = mount(<Component></Component>);
    expect(logSpy).toBeCalledWith('');
    wrapper.find('input').simulate('change', { target: { value: 'UT' } });
    expect(logSpy).toBeCalledWith('UT');
    expect(wrapper).toMatchSnapshot();
    logSpy.mockRestore();
  });
});
