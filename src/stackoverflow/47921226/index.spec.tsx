import React from 'react';
import ToggleCheckbox from './';
import { shallow } from 'enzyme';

describe('ToggleCheckbox', () => {
  it('spy', () => {
    const spy = jest.spyOn(ToggleCheckbox.prototype, 'onChange').mockImplementation(() => {
      console.log(`spy called`);
    });
    const wrapper = shallow(<ToggleCheckbox />);
    wrapper.find('button').simulate('click');
    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});
