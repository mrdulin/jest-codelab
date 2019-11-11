import React from 'react';
import { ActivationSF } from './';
import { ExternalLandingPageUtil } from './ExternalLandingPageUtil';
import { shallow } from 'enzyme';

window.location.replace = jest.fn();

describe('ActivationSF', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('should redirect to /identify', () => {
    const mProps = { context: {} };
    const wrapper = shallow(<ActivationSF {...mProps}></ActivationSF>);
    expect(window.location.replace).toBeCalledWith('/identify');
  });
  test('should redirect to external IP address', () => {
    const spy = jest.spyOn(ExternalLandingPageUtil, 'getExternalLandingPageUrl');
    const mProps = { context: { userInfo: {}, externalLP: '10.0.0.1' } };
    const wrapper = shallow(<ActivationSF {...mProps}></ActivationSF>);
    expect(window.location.replace).toBeCalledWith('10.0.0.1');
    expect(spy).toBeCalledWith(mProps.context);
  });
  test('should redirect to /store', () => {
    const mProps = { context: { userInfo: {} } };
    const wrapper = shallow(<ActivationSF {...mProps}></ActivationSF>);
    expect(window.location.replace).toBeCalledWith('/store');
  });

  test('should render correctly', () => {
    const mProps = { context: {} };
    const addSpy = jest.spyOn(document.body.classList, 'add');
    const wrapper = shallow(<ActivationSF {...mProps}></ActivationSF>);
    expect(wrapper.prop('context')).toEqual(mProps.context);
    expect(wrapper.state('messages')).toBeNull();
    expect(addSpy).toBeCalledWith('sdp');
    addSpy.mockRestore();
  });
});
