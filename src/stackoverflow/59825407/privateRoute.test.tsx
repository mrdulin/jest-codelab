import React from 'react';
import { PrivateRoute } from './privateRoute';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { authenticationService } from './authenticationService';

describe('59825407', () => {
  it('should render component if current user exists', () => {
    const mProps = { component: jest.fn().mockReturnValueOnce(null) };
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute {...mProps}></PrivateRoute>
      </MemoryRouter>,
    );
    expect(wrapper.find(mProps.component).props()).toEqual(
      expect.objectContaining({
        history: expect.any(Object),
        location: expect.any(Object),
        match: expect.any(Object),
      }),
    );
  });

  it('should redirect if current user does not exist ', () => {
    authenticationService.currentUser = undefined as any;
    const mProps = { component: jest.fn().mockReturnValueOnce(null), path: '/user' };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/user']}>
        <PrivateRoute {...mProps}></PrivateRoute>
      </MemoryRouter>,
    );
    const history = wrapper.find('Router').prop('history') as any;
    expect(history.location.state.from.pathname).toBe('/user');
    expect(history.location.pathname).toBe('/');
  });
});
