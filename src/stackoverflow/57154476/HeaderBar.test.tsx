import React from 'react';
import HeaderBar from './HeaderBar';
import { shallow } from 'enzyme';

it('mocks the search function', () => {
  const logSpy = jest.spyOn(console, 'log');
  const wrapper = shallow(<HeaderBar />);
  const mEvent = { target: 'fake target' };
  wrapper.find('div').simulate('click', mEvent);
  expect(logSpy).toBeCalledWith(mEvent);
});
