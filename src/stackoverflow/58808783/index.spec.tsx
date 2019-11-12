import { SendProjectManagerEmail } from './';
import { mount } from 'enzyme';
import React from 'react';

describe('SendProjectManagerEmail', () => {
  it('renders disabled button', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<SendProjectManagerEmail sendEmail={mockFn} />);
    const button = wrapper.find('#send-project-manager-email-button');
    button.simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
