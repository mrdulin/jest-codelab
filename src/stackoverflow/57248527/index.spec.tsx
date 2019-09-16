import React from 'react';
import { Comp } from './';
import { mount } from 'enzyme';

describe('Comp', () => {
  it('t1', done => {
    const props = {
      OnItemsUpdate: jest.fn(),
      items: [1, 2],
      datasource: {
        UpdateItem: jest.fn().mockResolvedValue('whatever')
      }
    };
    expect(props.OnItemsUpdate).toBeCalledTimes(0);
    const wrapper = mount(<Comp {...props}></Comp>);
    expect(props.datasource.UpdateItem).toBeCalledTimes(props.items.length);
    expect(wrapper.html()).toMatchSnapshot();
    setImmediate(() => {
      expect(props.OnItemsUpdate).toBeCalledTimes(1);
      done();
    });
  });
});
