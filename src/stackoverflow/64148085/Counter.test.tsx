import { shallow } from 'enzyme';
import React from 'react';
import { Counter } from './Counter';

describe('64148085', () => {
  it('increment counter correctly', () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(wrapper.find('h2').text()).toBe('1');
  });
});
