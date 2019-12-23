import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import RouteNotFound from './NotFound';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('RouteNotFound', () => {
  it('Redirects to correct URL on click', () => {
    const { getByRole } = render(
      <MemoryRouter>
        <RouteNotFound />
      </MemoryRouter>,
    );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/help');
  });
});
