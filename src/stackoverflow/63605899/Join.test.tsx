import React from 'react';
import { shallow } from 'enzyme';
import io from 'socket.io-client';
import Join from './Join';

jest.mock('socket.io-client', () => {
  const mSocket = {
    emit: jest.fn(),
  };
  return jest.fn(() => mSocket);
});

describe('Join', () => {
  it('joins a chat', () => {
    const ENDPOINT = 'localhost:5000';
    const mockSocket = io(ENDPOINT);
    const joinWrapper = shallow(<Join />);
    joinWrapper.find('a').simulate('click');
    expect(mockSocket.emit).toHaveBeenCalledWith('join', { name: 'Paola', room: '1' }, expect.any(Function));
  });
});
