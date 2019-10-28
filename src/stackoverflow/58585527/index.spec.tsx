import React from 'react';
import { shallow } from 'enzyme';
import SomeComponent from './';

describe('SomeComponent', () => {
  test('should handle click', () => {
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    const mEvent = { preventDefault: jest.fn() };
    window.scrollTo = jest.fn();
    wrapper.find('button').simulate('click', mEvent);
    expect(mEvent.preventDefault).toBeCalled();
    expect(window.scrollTo).toBeCalledWith(0, 0);
  });
});
