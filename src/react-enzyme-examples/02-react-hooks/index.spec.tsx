import React from 'react';
import SampleComponent from './';
import { shallow } from 'enzyme';

describe('SampleComponent', () => {
  test('should handle click correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<SampleComponent></SampleComponent>);
    const button = wrapper.find('button');
    expect(button.text()).toBe('Click Me');
    button.simulate('click');
    expect(logSpy).toBeCalledWith('hello world');
  });
});
