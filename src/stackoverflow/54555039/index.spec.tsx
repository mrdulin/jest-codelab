import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import { SomeComponent } from './';

jest.mock('axios', () => {
  return {
    post: jest.fn()
  };
});

describe('SomeComponent', () => {
  describe('#handleLogout', () => {
    const mockedMouseEvent = {
      preventDefault: jest.fn()
    };
    it('should logout correctly', done => {
      const mockedData = 'mocked data';
      const wrapper = shallow(<SomeComponent></SomeComponent>);
      expect(wrapper.find('button')).toHaveLength(1);
      (axios.post as jest.MockedFunction<typeof axios.post>).mockResolvedValueOnce(mockedData);
      const consoleLogSpyOn = jest.spyOn(console, 'log');

      wrapper.find('button').simulate('click', mockedMouseEvent);
      expect(wrapper.find('button').text()).toBe('Logout');
      expect(axios.post).toBeCalledWith('/logout');

      setImmediate(() => {
        expect(consoleLogSpyOn).toBeCalledWith(mockedData);
        consoleLogSpyOn.mockRestore();
        done();
      });
    });

    it('should throw error when axios post error', done => {
      const mockedError = new Error('network error');
      const wrapper = shallow(<SomeComponent></SomeComponent>);
      expect(wrapper.find('button')).toHaveLength(1);
      (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(mockedError);
      const consoleLogSpyOn = jest.spyOn(console, 'log');
      wrapper.find('button').simulate('click', mockedMouseEvent);
      expect(wrapper.find('button').text()).toBe('Logout');
      expect(axios.post).toBeCalledWith('/logout');

      setImmediate(() => {
        expect(consoleLogSpyOn).toBeCalledWith(mockedError);
        consoleLogSpyOn.mockRestore();
        done();
      });
    });
  });
});
