import { Foo } from './foo';
import React from 'react';
import { shallow } from 'enzyme';

describe('check foo Component', () => {
  it('data is false', () => {
    const wrapper = shallow(<Foo data={false} />);
    expect(wrapper.contains('Hi')).toBeTruthy();
  });
  it('data is true', () => {
    const wrapper = shallow(<Foo data={true} />);
    expect(wrapper.contains('Hello')).toBeTruthy();
  });
});
