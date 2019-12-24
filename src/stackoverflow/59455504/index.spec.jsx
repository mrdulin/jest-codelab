import App from './index';
import { mount } from 'enzyme';
import React from 'react';

describe('59455504', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('call the handlingBlurEmail method', () => {
    const mailReference = { current: { validate: jest.fn() } };
    jest.spyOn(React, 'createRef').mockReturnValue(mailReference);
    const wrapper = mount(<App childRef={() => {}} />);
    const mEvent = {
      target: { id: 'email', value: 'test@gmail.com' },
    };
    wrapper.find('.Form1').prop('onBlur')(mEvent);
    expect(mailReference.current.validate).toBeCalledWith(mEvent.target.value);
  });
});
