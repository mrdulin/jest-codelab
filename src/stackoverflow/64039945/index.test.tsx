import { getComponent } from '.';
import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router';

describe('64039945', () => {
  it('should pass', () => {
    const component = {
      component: () => <div></div>,
    };
    const result = getComponent({ authorised: true, privacyAccepted: false }, component, component.component);
    const wrapper = shallow(<div>{result}</div>);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
