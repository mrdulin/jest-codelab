import React from 'react';
import { shallow } from 'enzyme';
import FileUpload from './FileUpload';

describe('FileUpload', () => {
  test('should call validateImage method correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<FileUpload></FileUpload>);
    expect(wrapper.dive().text()).toBe('file upload');
    // @ts-ignore
    // tslint:disable-next-line: no-string-literal
    wrapper
      .dive()
      .instance()
      ['validateImage']();
    expect(logSpy).toBeCalledWith('validate image');
  });
});
