import React from 'react';
import { shallow } from 'enzyme';
import { SomeComponent } from './';

describe('SomeComponent', () => {
  const getAttribute = jest.fn();
  it('t1', () => {
    const selectedOptions = [
      { name: 'animal', value: 'dog' },
      { name: 'fruit', value: 'apple' },
      { name: 'language', value: 'jest' }
    ];
    const wrapper = shallow(<SomeComponent></SomeComponent>);
    expect(wrapper.find('.shape-dropdown')).toHaveLength(3);

    getAttribute.mockReturnValueOnce(selectedOptions[0].value);
    wrapper
      .find('.shape-dropdown')
      .at(0)
      .simulate('change', { target: { name: selectedOptions[0].name, getAttribute, value: selectedOptions[0].value } });
    expect(wrapper.state()).toEqual({ animal: 'dog', fruit: '', language: '' });

    getAttribute.mockReturnValueOnce(selectedOptions[1].value);
    wrapper
      .find('.shape-dropdown')
      .at(1)
      .simulate('change', { target: { name: selectedOptions[1].name, getAttribute, value: selectedOptions[1].value } });
    expect(wrapper.state()).toEqual({ animal: 'dog', fruit: 'apple', language: '' });

    getAttribute.mockReturnValueOnce(selectedOptions[2].value);
    wrapper
      .find('.shape-dropdown')
      .at(2)
      .simulate('change', { target: { name: selectedOptions[2].name, getAttribute, value: selectedOptions[2].value } });
    expect(wrapper.state()).toEqual({ animal: 'dog', fruit: 'apple', language: 'jest' });
  });
});
