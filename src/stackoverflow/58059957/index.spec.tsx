import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CheckState } from './';

describe('CheckState', () => {
  describe('#render', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(<CheckState></CheckState>);
    });
    it('should render correctly', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.text()).toBe('Not Done');
      wrapper.setState({ isDone: true });
      expect(wrapper.text()).toBe('Done');
    });
  });
});
