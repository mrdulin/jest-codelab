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

  it('should enabled animation', () => {
    const mEvent = {
      target: { scrollWidth: 100, scrollLeft: 50, clientWidth: 50 },
    };
    wrapper.find('.story-card-list').simulate('scroll', mEvent);
    expect(wrapper.find('.story-card-list').text()).toEqual('story card list, animate: animation enabled');
  });

  it('should disabled animation', () => {
    const mEvent = {
      target: { scrollWidth: 100, scrollLeft: 50, clientWidth: 100 },
    };
    wrapper.find('.story-card-list').simulate('scroll', mEvent);
    expect(wrapper.find('.story-card-list').text()).toEqual('story card list, animate: animation disabled');
  });
});
