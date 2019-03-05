import React, { Component } from 'react';
import SetStoreOverlay from './';
import axios from 'axios';
import { shallow } from 'enzyme';

jest.mock('axios', () => {
  return {
    get: jest.fn(),
  };
});

describe('SetStoreOverlay', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const data = {};
    (axios.get as jest.Mocked<any>).mockImplementationOnce(() => Promise.resolve(data));
    const mProps = { onStoreFetch: jest.fn() };
    const wrapper = shallow(<SetStoreOverlay {...mProps} />);
    const spy = jest.spyOn(wrapper.instance() as any, 'getStores');
    wrapper.setState({ searchText: 'test1' });
    wrapper.instance()['onSearchClick']();
    expect(spy).toHaveBeenCalledWith('test1');
    expect(axios.get).toBeCalledWith(`/searchux/api/v1/storeProxy?term=test1`);
  });
});
