import React from 'react';
import { ScrollToTop } from './';
import { mount } from 'enzyme';

describe('ScrollToTop', () => {
  it('should scroll to top', () => {
    const queue: any[] = [];
    const mUnListen = jest.fn();
    const mHistory = {
      listen: jest.fn().mockImplementation(fn => {
        queue.push(fn);
        return mUnListen;
      })
    };
    window.scrollTo = jest.fn();
    const wrapper = mount(<ScrollToTop history={mHistory}></ScrollToTop>);
    queue[0]();
    expect(mHistory.listen).toBeCalledWith(expect.any(Function));
    expect(window.scrollTo).toBeCalledWith(0, 0);

    wrapper.unmount();
    expect(mUnListen).toBeCalledTimes(1);
  });
});
