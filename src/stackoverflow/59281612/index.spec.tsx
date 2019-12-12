import React from 'react';
import { TestContainer } from './';
import { shallow } from 'enzyme';

describe('TestContainer', () => {
  it('should pass', () => {
    const wrapper = shallow(<TestContainer></TestContainer>);
    const instance = wrapper.instance();
    expect(wrapper.exists()).toBeTruthy();
    expect(instance['myValue']).toBe(5);
  });
});
