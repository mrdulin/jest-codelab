import React from 'react';
import Condition from './';
import { render, wait } from '@testing-library/react';
import api from './api';
import { mocked } from 'ts-jest/utils';

jest.mock('./api', () => {
  return { get: jest.fn() };
});

describe('63981693', () => {
  test('fetches and displays data', async () => {
    mocked(api.get).mockResolvedValue({ data: 'mock data' });
    const props = {};
    const { container } = render(<Condition {...props} />);
    await wait(() => expect(container.textContent).toContain('mock data'));
    expect(api.get).toBeCalledWith('http://localhost:3000/api');
    expect(container).toBeDefined();
  });
});
