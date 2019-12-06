import React from 'react';
import { Posts } from './';
import { mount } from 'enzyme';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

describe('Posts', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it('should render list correctly', async () => {
    const mResponse = { data: { list: [{ id: 1, title: 'jest' }] } };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mResponse);
    const wrapper = mount(<Posts></Posts>);
    expect(wrapper.find('ul').children()).toHaveLength(0);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find('ul').children()).toHaveLength(1);
    expect(wrapper).toMatchInlineSnapshot(`
      <Component>
        <ul>
          <li
            key="1"
          >
            jest
          </li>
        </ul>
      </Component>
    `);
  });

  it('should render empty list when request list data failed', async () => {
    const mError = new Error('Internal server error');
    jest.spyOn(axios, 'get').mockRejectedValueOnce(mError);
    const wrapper = mount(<Posts></Posts>);
    expect(wrapper.find('ul').children()).toHaveLength(0);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find('ul').children()).toHaveLength(0);
    expect(wrapper).toMatchInlineSnapshot(`
      <Component>
        <ul />
      </Component>
    `);
  });
});
