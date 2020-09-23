import React from 'react';
import Parent from './Parent';

jest.mock('./Children', () => {
  return jest.fn(() => <div>mocked child</div>);
});

describe('<Parent/>', () => {
  let wrapper;
  let props = {};

  describe('render', () => {
    it('renders', () => {
      wrapper = mount(<Parent props={props} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
