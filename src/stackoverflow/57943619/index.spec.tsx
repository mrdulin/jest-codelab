import React from 'react';
import { shallow } from 'enzyme';
import SearchFlightBuilder from './';

describe('SearchFlightBuilder', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should handle scroll, pageindex + 1', () => {
    const mDiv = document.createElement('div');
    const events = {};
    const addEventListenerSpy = jest.spyOn(mDiv, 'addEventListener').mockImplementation((event, handler) => {
      events[event] = handler;
    });
    mDiv.scrollTop = 1;
    Object.defineProperty(mDiv, 'clientHeight', { value: 1 });
    Object.defineProperty(mDiv, 'scrollHeight', { value: 1 });
    const mRef = { current: mDiv };
    const createRefSpy = jest.spyOn(React, 'createRef').mockReturnValueOnce(mRef);
    const component = shallow(<SearchFlightBuilder />);
    expect(createRefSpy).toBeCalledTimes(1);
    expect(addEventListenerSpy).toBeCalledWith('scroll', component.instance()['handleScroll']);
    events['scroll']();
    expect(component.state('pageIndex')).toBe(1);
    expect(component.state('scrollCalled')).toBeTruthy();
  });
});
