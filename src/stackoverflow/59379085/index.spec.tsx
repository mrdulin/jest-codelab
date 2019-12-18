import React from 'react';
import { OrganizationDocs } from '.';
import { mount } from 'enzyme';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const mLocalStorage = {
  _storage: {},
  getItem: jest.fn((key) => {
    return mLocalStorage._storage[key];
  }),
  setItem: jest.fn((key, value) => {
    mLocalStorage._storage[key] = value;
  }),
};
Object.defineProperty(window, 'localStorage', {
  value: mLocalStorage,
});

describe('MyComponent', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('mocks API call', async () => {
    const token = 'JWT1111';
    mLocalStorage.setItem('token', token);
    const response = { data: { name: 'mocked name' } };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(response);
    const wrapper = mount(<OrganizationDocs />);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    expect(wrapper.find('.org-docs-header').text()).toContain('mocked name');
    expect(axios.get).toBeCalledWith('organizations/organizations/', {
      headers: { Authorization: 'JWT ' + token },
    });
  });
});
