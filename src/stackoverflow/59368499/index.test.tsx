import { MyComponent } from './';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('MyComponent', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    const mResponse = jest.fn().mockResolvedValue({ countryCode: 123, country: 'US' });
    (global as any).fetch = jest.fn(() => {
      return Promise.resolve({ json: mResponse });
    });
    const wrapper = mount(<MyComponent></MyComponent>);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.text()).toBe('country: , cntCode: ');
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(wrapper.text()).toBe('country: US, cntCode: 123');
    expect((global as any).fetch).toBeCalledWith('http://ip-api.com/json');
  });
});
