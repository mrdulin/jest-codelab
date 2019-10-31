import React from 'react';
import { shallow } from 'enzyme';
import { FileUpload } from './FileUpload';

describe('FileUpload', () => {
  test('should call validateImage method correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<FileUpload></FileUpload>);
    expect(wrapper.text()).toBe('file upload');
    // tslint:disable-next-line: no-string-literal
    wrapper.instance()['validateImage']();
    expect(logSpy).toBeCalledWith('validate image');
  });
});
