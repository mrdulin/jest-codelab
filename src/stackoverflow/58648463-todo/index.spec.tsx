import React from 'react';
import { shallow } from 'enzyme';
import MFASection from '.';
import svc from './contants/svc';

describe('MFASection', () => {
  test('molecules/MFASection mounts', () => {
    const getMeSpy = jest.spyOn(svc, 'getMe').mockResolvedValueOnce({ data: { mfa_enabled: false } });
    const wrapper = shallow(<MFASection></MFASection>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state('enabledMFA')).toBeTruthy();
    expect(wrapper.text()).toBe('enabledMFA: true');
    expect(getMeSpy).toBeCalledTimes(1);
  });
});
