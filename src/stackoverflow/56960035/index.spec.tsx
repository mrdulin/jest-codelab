import React from 'react';
import { Avatar } from './';
import { mount } from 'enzyme';

describe('Avatar', () => {
  it('should handle error', () => {
    const mProps = {
      imageSrc: '123.com',
      imageAlt: 'alt',
      imageWidth: 123,
      imageHeight: 456
    };
    const wrapper = mount(<Avatar {...mProps}></Avatar>);
    expect(wrapper.find('img').props()).toEqual({
      src: mProps.imageSrc,
      alt: mProps.imageAlt,
      style: { width: mProps.imageWidth, height: mProps.imageHeight },
      onError: expect.any(Function)
    });
    const mEvent = { target: wrapper.getDOMNode() } as any;
    wrapper.find('img').prop('onError')!(mEvent);
    expect(mEvent.target.src).toBe('http://localhost/static/images/placeholder/avatar.png');
  });
});
