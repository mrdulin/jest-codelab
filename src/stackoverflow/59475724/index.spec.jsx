import React from 'react';
import Counter from './';
import { shallow } from 'enzyme';

describe('Counter', () => {
  let counter;
  beforeEach(() => {
    counter = shallow(<Counter />);
  });

  it('calls incCounter function when button is clicked', () => {
    expect(counter.find('p').text()).toBe('Counter value is: 0');
    const incButton = counter.find('button');
    incButton.simulate('click');
    expect(counter.find('p').text()).toBe('Counter value is: 1');
  });
});
