import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { SomeComponent, ISomeComponentState } from './';

describe('SomeComponent', () => {
  let wrapper: ShallowWrapper;
  let getFullNameSpy;
  let alertSpy;
  beforeEach(() => {
    alertSpy = jest.spyOn(window, 'alert');
    getFullNameSpy = jest.spyOn(SomeComponent.prototype as any, 'getFullName');
    wrapper = shallow(<SomeComponent></SomeComponent>);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('check submit', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    const formEventMocked = { preventDefault: jest.fn() };
    const state: ISomeComponentState = {
      firstName: 'Cel.du.on',
      lastName: 'lin.on',
      isDone: false
    };
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', formEventMocked);
    expect(getFullNameSpy).toBeCalledTimes(1);
    expect(formEventMocked.preventDefault).toBeCalledTimes(1);
    expect(wrapper.state('isDone')).toBeTruthy();
  });

  it('should alert when first name is invalid', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    const formEventMocked = { preventDefault: jest.fn() };
    const state: ISomeComponentState = {
      firstName: 'du',
      lastName: 'lin.on',
      isDone: false
    };
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', formEventMocked);
    expect(alertSpy).toBeCalledWith('Please enter a valid name');
    expect(formEventMocked.preventDefault).toBeCalledTimes(1);
    expect(wrapper.state('isDone')).toBeTruthy();
  });

  it('should alert when last name is invalid', () => {
    expect(wrapper.find('form')).toHaveLength(1);
    const formEventMocked = { preventDefault: jest.fn() };
    const state: ISomeComponentState = {
      firstName: 'Cel.du.on',
      lastName: 'lin',
      isDone: false
    };
    wrapper.setState(state);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', formEventMocked);
    expect(alertSpy).toBeCalledWith('check lastname too');
    expect(formEventMocked.preventDefault).toBeCalledTimes(1);
    expect(wrapper.state('isDone')).toBeTruthy();
  });
});
