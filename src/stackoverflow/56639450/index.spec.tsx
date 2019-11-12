import React from 'react';
import SomeComponent, { ISomeComponentState } from './';
import { shallow } from 'enzyme';

describe('SomeComponent', () => {
  test('should scroll to the end', () => {
    const mCurrent = document.createElement('div');
    mCurrent.scrollBy = jest.fn();
    const mState: ISomeComponentState = { direction: 'right', scrollRef: { current: mCurrent } };
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    expect(wrapper.text()).toBe('scroll to the end');
    wrapper.setState(mState);
    wrapper.find('button').simulate('doubleClick');
    expect(mCurrent.scrollBy).toBeCalledWith(3000, 0);
  });
});
