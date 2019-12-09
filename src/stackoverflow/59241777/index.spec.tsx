import React from 'react';
import { Example } from './';
import { mount } from 'enzyme';
import { getProducts } from './api/getProducts';

jest.mock('./api/getProducts.ts', () => {
  return {
    getProducts: jest.fn(),
  };
});

describe('Example', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should fetch products correctly', async () => {
    const mResponse = { result: [{ id: 2, name: 'jest' }] };
    (getProducts as jest.MockedFunction<any>).mockResolvedValueOnce(mResponse);
    const wrapper = mount(<Example></Example>);
    const instance = wrapper.instance();
    wrapper.setState({
      items: [{ id: 1, name: 'kettle' }],
    });
    await instance['fetchProducts']();
    expect(getProducts).toBeCalledWith('/api/product/1');
  });
});
