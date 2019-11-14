import React from 'react';
import { shallow } from 'enzyme';
import MFASection from '.';
import svc from './contants/svc';

describe('MFASection', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('molecules/MFASection mounts', done => {
    const mRepsonse = { data: { mfa_enabled: false } };
    let successHandler;
    const getMeSpy = jest.spyOn(svc, 'getMe').mockImplementation((): any => {
      const mThen = jest.fn().mockImplementationOnce((onfulfilled: any): any => {
        successHandler = onfulfilled;
      });
      return { then: mThen };
    });
    const wrapper = shallow(<MFASection></MFASection>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state('enabledMFA')).toBeTruthy();
    successHandler(mRepsonse);
    expect(wrapper.text()).toBe('enabledMFA: 2');
    expect(getMeSpy).toBeCalledTimes(1);
    done();
  });

  test('molecules/MFASection mounts - 2', done => {
    const mRepsonse = { data: { mfa_enabled: false } };
    const getMeSpy = jest.spyOn(svc, 'getMe').mockResolvedValueOnce(mRepsonse);
    const wrapper = shallow(<MFASection></MFASection>);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.state('enabledMFA')).toBeTruthy();
    setImmediate(() => {
      expect(wrapper.text()).toBe('enabledMFA: 2');
      done();
    });
    expect(getMeSpy).toBeCalledTimes(1);
  });
});
