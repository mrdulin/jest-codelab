import MyComponent from './';
import { Component1, Component2, Component3 } from './';

import React from 'react';
import { shallow } from 'enzyme';

describe('59980692', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MyComponent></MyComponent>);
  });
  it('renders <Component1 /> component', () => {
    expect(wrapper.find(Component1)).toHaveLength(1);
  });

  it('renders <Component2 /> component', () => {
    expect(wrapper.find(Component2)).toHaveLength(1);
  });
  it('renders <Component3 /> component', () => {
    expect(wrapper.find(Component3)).toHaveLength(1);
  });
});
