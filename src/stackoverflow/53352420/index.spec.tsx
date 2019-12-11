import React from 'react';
import { shallow } from 'enzyme';
import SomeComponent from './';

describe('SomeComponent', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should handle submit correctly', async () => {
    const mElement = { offsetTop: 123 };
    document.getElementById = jest.fn().mockReturnValueOnce(mElement);
    window.scrollTo = jest.fn();
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', mEvent);
    expect(mEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(document.getElementById).toBeCalledWith('#selector');
    expect(window.scrollTo).toBeCalledWith({ top: 123, behavior: 'smooth' });
  });
});
