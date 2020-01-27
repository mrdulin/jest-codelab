import { shallow } from 'enzyme';
import React from 'react';
import SomeComponent from '.';
const { ipcRenderer } = require('electron');

jest.mock(
  'electron',
  () => {
    const mElectron = { ipcRenderer: { on: jest.fn(), send: jest.fn() } };
    return mElectron;
  },
  { virtual: true },
);

describe('59934084', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SomeComponent></SomeComponent>);
  });
  it('should render', () => {
    expect(wrapper.exists).toBeTruthy();
  });

  it('should handle submit, set status to true', () => {
    ipcRenderer.on.mockImplementationOnce((event, callback) => {
      callback(event, 'success');
    });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('status')).toBeTruthy();
    expect(ipcRenderer.on).toBeCalledWith('asynchronous-reply', expect.any(Function));
    expect(ipcRenderer.send).toBeCalledWith('update', 'value');
  });
  it('should handle submit without setting status to true', () => {
    ipcRenderer.on.mockImplementationOnce((event, callback) => {
      callback(event, 'failure');
    });
    wrapper.find('form').simulate('submit');
    expect(wrapper.state('status')).toBeFalsy();
    expect(ipcRenderer.on).toBeCalledWith('asynchronous-reply', expect.any(Function));
    expect(ipcRenderer.send).toBeCalledWith('update', 'value');
  });
});
