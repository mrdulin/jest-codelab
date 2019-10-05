import React from 'react';
import TodoSearch from './TodoSearch';
import { mount } from 'enzyme';

describe('TodoSearch', () => {
  const mockOnSearch = jest.fn();
  const mockOnCheckbox = jest.fn();
  it('should handle search correctly', () => {
    const searchInput = 'jest';
    const wrapper = mount(<TodoSearch onSearch={mockOnSearch} onCheckbox={mockOnCheckbox}></TodoSearch>);
    (wrapper.find('input').instance() as any).value = searchInput;

    wrapper.find('input').simulate('change');
    expect(mockOnSearch).toBeCalledWith(searchInput);
  });
});
