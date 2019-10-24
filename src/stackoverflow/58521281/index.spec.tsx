import React from 'react';
import SomeComponent from './index';
import * as utils from './utils';
import { shallow } from 'enzyme';

describe('SomeComponent', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  test('should mock utils', () => {
    const someHelperSpy = jest.spyOn(utils, 'someHelper').mockReturnValue('mocked return value');
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    expect(jest.isMockFunction(utils.someHelper)).toBeTruthy();
    expect(wrapper.text()).toBe('some component, mocked return value');
    expect(someHelperSpy).toBeCalled();
  });
});
