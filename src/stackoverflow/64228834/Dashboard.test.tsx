import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import { useTitle } from './useTitle';

jest.mock('./useTitle');

describe('Dashboard', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(jest.isMockFunction(useTitle)).toBeTruthy();
    expect(useTitle).toBeCalledWith('Dashboard');
  });
});
