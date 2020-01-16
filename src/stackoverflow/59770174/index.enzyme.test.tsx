import { Button } from '.';
import { shallow } from 'enzyme';
import React from 'react';

describe('59770174', () => {
  it('should call action once', (done) => {
    let callCount = 0;
    const mProps = {
      action: jest.fn().mockImplementation(() => {
        callCount++;
      }),
    };
    const wrapper = shallow(<Button {...mProps}></Button>);
    const button = wrapper.find('button');
    button.simulate('click');
    button.simulate('click');
    button.simulate('click');
    const lastCount = callCount;
    expect(lastCount).toBe(1);

    setTimeout(() => {
      console.log(callCount, lastCount);
      expect(callCount).toBe(lastCount);
      expect(mProps.action).toBeCalledTimes(1);
      done();
    }, 64);
  });
});
