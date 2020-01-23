import React from 'react';
import ItemList from './itemList';
import { mount } from 'enzyme';
import { fetchItems } from './api';
import { act } from 'react-dom/test-utils';
import Item from './item';
import { addToSelectList } from './listModule';

jest.mock('./api', () => {
  return { fetchItems: jest.fn() };
});

jest.mock('./listModule', () => {
  return { addToSelectList: jest.fn() };
});

describe('59853199', () => {
  it('should pass', async () => {
    const mFetchItemsResponse = { data: { items: [{ name: 'a' }, { name: 'b' }] } };
    (fetchItems as jest.MockedFunction<typeof fetchItems>).mockResolvedValueOnce(mFetchItemsResponse);
    const wrapper = mount(<ItemList />);
    expect(wrapper.find(Item).length).toBe(0);
    // when useEffect stable
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve));
    });
    wrapper.update();
    expect(wrapper.find(Item).length).toBeGreaterThan(0);
    wrapper
      .find(Item)
      .at(0)
      .prop('onClick')();
    expect(addToSelectList).toBeCalledWith(mFetchItemsResponse.data.items[0]);
  });
});
