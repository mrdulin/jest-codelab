import React from 'react';
import SomeComponent from './';
import { shallow } from 'enzyme';

describe('SomeComponent', () => {
  it('should load component with passed props', () => {
    const defaultProps = {
      testString: 'string',
      testArr: [],
      checkData: jest.fn(),
      activePage: false
    };
    const wrapper = shallow(<SomeComponent {...defaultProps}></SomeComponent>);
    expect(wrapper.props()).toEqual(defaultProps);
  });
});
