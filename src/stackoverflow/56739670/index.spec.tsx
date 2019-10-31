import React from 'react';
import { Component } from './';
import { shallow } from 'enzyme';

describe('Component', () => {
  const focus = jest.fn();
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  test('should render correctly', () => {
    const wrapper = shallow(<Component></Component>);
    const div = wrapper.find('div');
    expect(div.text()).toBe('Stuff In here');
  });
  test('should handle click event correctly when previousSibling does not exist', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { focus } });
    const wrapper = shallow(<Component></Component>);
    wrapper.find('div').simulate('focus');
    expect(useRefSpy).toBeCalledTimes(1);
    expect(focus).toBeCalledTimes(1);
  });

  test('should render and handle click event correctly when previousSibling exists', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: { previousSibling: { focus } } });
    const wrapper = shallow(<Component></Component>);
    wrapper.find('div').simulate('focus');
    expect(useRefSpy).toBeCalledTimes(1);
    expect(focus).toBeCalledTimes(1);
  });

  test('should render and handle click event correctly when current does not exist', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
    const wrapper = shallow(<Component></Component>);
    wrapper.find('div').simulate('focus');
    expect(useRefSpy).toBeCalledTimes(1);
    expect(focus).not.toBeCalled();
  });
});
