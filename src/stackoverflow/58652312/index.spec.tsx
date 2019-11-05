import React from 'react';
import { shallow } from 'enzyme';
import MyClass from './';

describe('MyClass', () => {
  test('should handle mousedown event', () => {
    const wrapper = shallow(<MyClass></MyClass>);
    const onMouseDownHandlerSpy = jest.spyOn(MyClass.prototype, 'onMouseDownHandler');
    wrapper.find('div').simulate('mouseDown');
    expect(onMouseDownHandlerSpy).toBeCalled();
  });
});
