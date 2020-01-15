import { cleanup, waitForElement, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './app';

describe('<App />', () => {
  it('renders', async () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('loading')).toHaveTextContent('loading...');

    const resolved = await waitForElement(() => getByTestId('resolved'));
    expect(resolved).toBeVisible();
  });
});
