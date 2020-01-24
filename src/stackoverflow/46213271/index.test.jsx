import Link from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('46213271', () => {
  it('should handle click, call stopPropagation and preventDefault', () => {
    const mProps = { tf: 'tf' };
    const wrapper = shallow(<Link {...mProps}></Link>);
    expect(wrapper.exists()).toBeTruthy();
    const mEvent = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    wrapper.simulate('click', mEvent);
    expect(mEvent.stopPropagation).toBeCalledTimes(1);
    expect(mEvent.preventDefault).toBeCalledTimes(1);
  });
  it('should handle click, call stopPropagation', () => {
    const mProps = { tf: '' };
    const wrapper = shallow(<Link {...mProps}></Link>);
    expect(wrapper.exists()).toBeTruthy();
    const mEvent = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    wrapper.simulate('click', mEvent);
    expect(mEvent.stopPropagation).toBeCalledTimes(1);
    expect(mEvent.preventDefault).not.toBeCalled();
  });
});
