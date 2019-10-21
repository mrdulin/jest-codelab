import React from 'react';
import SomeComponent from './';
import { shallow } from 'enzyme';
import io from 'socket.io';

jest.mock('socket.io', () => {
  const mSocket = {
    on: jest.fn()
  };
  return jest.fn(() => mSocket);
});

describe('SomeComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SomeComponent></SomeComponent>);
    jest.restoreAllMocks();
  });
  test('should mount component and register socket event', () => {
    const instance = wrapper.instance() as any;
    const mSocket = io();
    expect(wrapper.text()).toBe('some component');
    expect(mSocket.on).toBeCalledWith('numOfPlayersChanged', instance.handleNumOfPlayersChanged);
  });

  test('should handle player changed ', () => {
    const logSpy = jest.spyOn(console, 'log');
    const instance = wrapper.instance() as any;
    instance.handleNumOfPlayersChanged();
    expect(logSpy).toBeCalledWith('do something');
  });
});
