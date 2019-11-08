import React from 'react';
import { shallow } from 'enzyme';
import { Cars } from './';

const props = {};

test('should close', () => {
  let events = {};
  document.addEventListener = jest.fn((event, cb) => {
    events[event] = cb;
  });

  const wrapper = shallow(<Cars {...props} />);
  const instance = wrapper.instance();
  const spy = jest.spyOn(instance, 'skipCar');

  events.keydown({ keyCode: 27 });

  expect(spy).toHaveBeenCalled();
  expect(wrapper.state().activeSearch).toBe(false);
});
