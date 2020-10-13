import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Firebase from './firebase';
import { authMock } from './setupTests';
// @ts-ignore
Firebase.auth = authMock;

describe('<SignOutButton />', () => {
  afterEach(cleanup);

  it('calls Firebase signOut on click', async () => {
    const SignOutButton = (await import('./SignOutButton')).default;
    const { getByText } = render(<SignOutButton />);
    const button = getByText('Sign Out');
    fireEvent.click(button);
    expect(Firebase.auth().signOut).toHaveBeenCalled();
  });
});
