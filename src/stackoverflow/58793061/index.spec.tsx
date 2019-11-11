import React from 'react';
import { shallow } from 'enzyme';
import { Upload } from './';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Upload />);
});

describe('Choose File', () => {
  const mockedFile = 'application.pdf';
  const event = {
    target: {
      files: [{ name: 'application.pdf' }]
    }
  };
  it('displays the file name when a file is selected', () => {
    wrapper.find('#file-upload').simulate('change', event);
    wrapper.update();
    expect(
      wrapper
        .find('label')
        .at(1)
        .text()
    ).toEqual(mockedFile);
  });
});
