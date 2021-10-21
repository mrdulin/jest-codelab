import React from 'react';
import { shallow } from 'enzyme';
import SomeComponent from '.';

describe('59741487', () => {
  let wrapper;
  const mFormValidation = jest.fn();
  const mLogin = jest.fn();
  const mHandleErrors = jest.fn();
  beforeEach(() => {
    SomeComponent.prototype.formValidation = mFormValidation;
    SomeComponent.prototype.login = mLogin;
    SomeComponent.prototype.handleErrors = mHandleErrors;
    wrapper = shallow(<SomeComponent></SomeComponent>);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it.skip('should render', () => {
    expect(wrapper.find('form')).toBeTruthy();
  });
  describe('#handleSubmit', () => {
    it.skip('should login', () => {
      mFormValidation.mockReturnValueOnce(true);
      const mEvent = { preventDefault: jest.fn() };
      wrapper.find('form').simulate('submit', mEvent);
      expect(mEvent.preventDefault).toBeCalledTimes(1);
      expect(mLogin).toHaveBeenCalledTimes(1);
    });

    it.skip('should handle error', () => {
      mFormValidation.mockReturnValueOnce(false);
      const mEvent = { preventDefault: jest.fn() };
      wrapper.find('form').simulate('submit', mEvent);
      expect(mEvent.preventDefault).toBeCalledTimes(1);
      expect(mHandleErrors).toBeCalledWith({});
    });
  });
});
