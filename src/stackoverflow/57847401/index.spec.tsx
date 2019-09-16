import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './';
import { testfunction } from './testfunction';

jest.mock('./testfunction.ts');

describe('Login', () => {
  const dispatch = jest.fn();
  const sampleUserParams = {
    email: 'test@test.com',
    password: 'samplePassword123'
  };
  it('handleSubmit', () => {
    const wrapper = shallow(<Login dispatch={dispatch} />);
    expect(wrapper.is('.login')).toBeTruthy();
    expect(wrapper.find('form')).toHaveLength(1);
    wrapper.find('form').simulate('submit');
    const cmpInstance = wrapper.instance();

    expect(dispatch).toBeCalledWith(
      // tslint:disable-next-line: no-string-literal
      testfunction(sampleUserParams, cmpInstance['successCallback'], cmpInstance['errorCallback'])
    );
    // tslint:disable-next-line: no-string-literal
    expect(testfunction).toBeCalledWith(sampleUserParams, cmpInstance['successCallback'], cmpInstance['errorCallback']);
  });
});
