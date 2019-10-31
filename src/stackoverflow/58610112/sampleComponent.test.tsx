import React from 'react';
import { mount } from 'enzyme';
import SampleComponent from './sampleComponent';
import { act } from 'react-dom/test-utils';

const setup = () => mount(<SampleComponent />);

beforeEach(() => {
  jest.resetAllMocks();
});
test('testing mousedown - 1', () => {
  const map: any = {};
  document.addEventListener = jest.fn((event, callback) => {
    map[event] = callback;
  });
  const wrapper = setup();
  expect(wrapper.find('#sample-div').text()).toBe('State value is: false');
  act(() => {
    map.mousedown({ target: document.createElement('a') });
  });
  expect(wrapper.find('#sample-div').text()).toBe('State value is: true');
  expect(document.addEventListener).toBeCalledTimes(2);
});

test('testing mousedown - 2', () => {
  const map: any = {};
  document.addEventListener = jest.fn((event, callback) => {
    map[event] = callback;
  });
  const wrapper = setup();
  expect(wrapper.find('#sample-div').text()).toBe('State value is: false');
  act(() => {
    map.mousedown({ target: wrapper.getDOMNode() });
  });
  expect(wrapper.find('#sample-div').text()).toBe('State value is: false');
  expect(document.addEventListener).toBeCalledTimes(1);
});
