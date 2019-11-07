import React from 'react';
import { mount } from 'enzyme';
import AuthService from './AuthService';
import Tester from './Tester';
import { act } from 'react-dom/test-utils';

jest.mock('./AuthService', () => {
  const mAuthService = {
    fetch: jest.fn()
  };
  return jest.fn(() => mAuthService);
});

it('<Test>', async () => {
  const authService = new AuthService();
  authService.fetch.mockResolvedValue('newResult');
  const component = mount(<Tester />);
  expect(component.find('p').text()).toEqual('');
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
  });
  expect(component.find('p').text()).toEqual('newResult');
});
