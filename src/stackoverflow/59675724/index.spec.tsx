import { StoryCardList } from './';
import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

describe('59675724', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<StoryCardList />);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should print true', () => {
    const logSpy = jest.spyOn(console, 'log');
    const mEvent = {
      target: {
        scrollWidth: 100,
        scrollLeft: 50,
        clientWidth: 50,
      },
    };
    wrapper.find('.story-card-list').simulate('scroll', mEvent);
    expect(logSpy).toBeCalledWith(true);
  });

  it('should print false', () => {
    const logSpy = jest.spyOn(console, 'log');
    const mEvent = {
      target: {
        scrollWidth: 100,
        scrollLeft: 50,
        clientWidth: 100,
      },
    };
    wrapper.find('.story-card-list').simulate('scroll', mEvent);
    expect(logSpy).toBeCalledWith(false);
  });
});
