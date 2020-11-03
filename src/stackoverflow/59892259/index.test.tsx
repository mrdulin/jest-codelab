import { List } from './';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, waitForElement } from '@testing-library/react';

describe('59892259', () => {
  let originFetch;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  it('should pass', async () => {
    const fakeResponse = { title: 'example text' };
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    const { getByTestId } = render(<List></List>);
    const div = await waitForElement(() => getByTestId('test'));
    expect(div).toHaveTextContent('example text');
    expect(mockedFetch).toBeCalledTimes(1);
    expect(mRes.json).toBeCalledTimes(1);
  });
});
