import React from 'react';
import { SearchForm } from './SearchForm';
import { mount } from 'enzyme';
import { Input } from './Input';

describe('SearchForm', () => {
  const text = 'This is a text for a test';
  const state = { search: text };
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      fetchData: jest.fn(() => state)
    };

    wrapper = mount(<SearchForm {...props} />);
  });

  test('It should call handlesubmit method when submitting the form', done => {
    const mockedFormEvent = {
      preventDefault: jest.fn()
    };
    wrapper.find('form').simulate('submit', mockedFormEvent);
    expect(wrapper.props().fetchData).toBeCalledWith(wrapper.state());
    expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
    done();
  });

  test('It should call handleChange method', done => {
    const input = wrapper.find(Input);

    input.props().value = text;
    input.simulate('change', { target: { value: text } });
    expect(input.get(0).props.value).toEqual(text);
    done();
  });
});
