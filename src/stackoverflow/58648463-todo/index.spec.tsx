import React from 'react';
import { shallow } from 'enzyme';
import MFASection from '.';
import svc from './contants/svc';

function flushPromises() {
  return new Promise(resolve => setImmediate(resolve));
}

describe.skip('MFASection', () => {
  test('molecules/MFASection mounts', async () => {
    const getMeSpy = jest.spyOn(svc, 'getMe').mockResolvedValueOnce({ data: { mfa_enabled: false } });
    const wrapper = shallow(<MFASection></MFASection>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state('enabledMFA')).toBeTruthy();
    await flushPromises();
    expect(wrapper.text()).toBe('enabledMFA: false');
    expect(getMeSpy).toBeCalledTimes(1);
  });
});
