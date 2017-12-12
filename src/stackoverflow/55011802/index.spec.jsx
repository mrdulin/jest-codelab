import React from 'react';
import SomeComponent from '.';
import { mount } from 'enzyme';

describe('SomeComponent', () => {
  test('should call click event on File Input', () => {
    document.getElementById = jest.fn();
    const wrapper = mount(<SomeComponent></SomeComponent>);
    expect(wrapper.find('label').text()).toBe('Choose File');
    const input = wrapper.find('#file-input').getDOMNode();
    const inputClickSpy = jest.spyOn(input, 'click');
    document.getElementById.mockReturnValue(input);
    wrapper.find('#fileinput-testclick').simulate('click');
    expect(document.getElementById.mock.calls[0]).toEqual(['file-input']);
    expect(document.getElementById.mock.calls[1]).toEqual(['file-input']);
    expect(inputClickSpy).toBeCalledTimes(1);
    expect(input.value).toBe('');

    wrapper.setState({ fileName: 'UT.pdf' });
    expect(wrapper.find('label').text()).toBe('Change File');
  });
});
