import React from 'react';
import { render } from '@testing-library/react';
import { Link } from '.';

describe('Link', () => {
  it('should display color on the link', () => {
    const { getByRole } = render(<Link href="/x">Test</Link>);
    const link = getByRole('link', { name: /test/i });
    expect(link).toHaveStyle(`color: #fff`);
  });
});
