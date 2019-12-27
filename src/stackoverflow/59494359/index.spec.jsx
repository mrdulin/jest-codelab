import React from 'react';
import { shallow } from 'enzyme';
import SomeComponent from './';

describe('SomeComponent', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should handle submit correctly', async () => {
    window.scrollTo = jest.fn();
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    const mEvent = { preventDefault: jest.fn() };
    wrapper.find('form').simulate('submit', mEvent);
    expect(mEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toBeCalledWith({ top: 0 });
  });
});
