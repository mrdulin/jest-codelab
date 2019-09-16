import React from 'react';
import { shallow } from 'enzyme';
import { SomeComponent } from './';

(global as any).Translator.trans = jest.fn();

describe('SomeComponent', () => {
  it('t1', () => {
    const mockTitle = 'test title';
    (global as any).Translator.trans.mockReturnValueOnce(mockTitle);
    const wrapper = shallow(<SomeComponent title={mockTitle} />);
    expect(wrapper.text()).toBe(`title: ${mockTitle}`);
    expect((global as any).Translator.trans).toBeCalledWith(mockTitle);
  });
});
