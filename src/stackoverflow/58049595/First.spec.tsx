import React from 'react';
import First from './First';
import { shallow } from 'enzyme';

describe('Test for First', () => {
  const props = {};
  const state = {};
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('getData test', () => {
    const getconfidentialDataSpy = jest.spyOn(First.prototype as any, 'getconfidentialData');
    const telemetryInfoSpy = jest.spyOn(First.prototype as any, 'telemetryInfo');
    const component = shallow(<First {...props} {...state} />);
    expect(component.text()).toBe('First');
    const comp = component.instance() as any;
    comp.getData();
    expect(getconfidentialDataSpy).toBeCalledTimes(1);
    expect(telemetryInfoSpy).toBeCalledTimes(1);
  });
});
