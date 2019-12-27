import SomeCompoennt from './index';
import React from 'react';
import { shallow } from 'enzyme';

describe('58877501', () => {
  it('should pass', async () => {
    const mProps = {
      getPaypalAuthUrl: jest.fn().mockResolvedValueOnce('http://github.com'),
    };
    const wrapper = shallow(<SomeCompoennt {...mProps}></SomeCompoennt>);
    expect(wrapper.text()).toBe('some component');
    expect(wrapper.state()).toEqual({ authUrl: '' });
    await new Promise((resolve) => setTimeout(resolve));
    expect(wrapper.state()).toEqual({ authUrl: 'http://github.com' });
  });
});
