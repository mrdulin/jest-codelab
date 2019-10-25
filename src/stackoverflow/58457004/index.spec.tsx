import React from 'react';
import { shallow } from 'enzyme';
import SomeComponent from './';

describe('SomeComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SomeComponent></SomeComponent>);
    jest.restoreAllMocks();
  });
  test('should handle button click', () => {
    const logSpy = jest.spyOn(console, 'log');
    expect(wrapper.find('button')).toHaveLength(2);
    const mEvent = { target: { parentNode: { getAttribute: jest.fn().mockReturnValueOnce('id1') } } };
    wrapper.find('#id1').simulate('click', mEvent);
    expect(logSpy).toBeCalledWith('do something');
    expect(mEvent.target.parentNode.getAttribute).toBeCalledWith('id');
  });

  test('should handle button click', () => {
    const logSpy = jest.spyOn(console, 'log');
    expect(wrapper.find('button')).toHaveLength(2);
    const mEvent = {
      target: {
        getAttribute: jest.fn().mockReturnValueOnce('id2'),
        parentNode: { getAttribute: jest.fn() }
      }
    };
    wrapper.find('#id1').simulate('click', mEvent);
    expect(logSpy).toBeCalledWith('do another thing');
    expect(mEvent.target.getAttribute).toBeCalledWith('id');
  });
});
