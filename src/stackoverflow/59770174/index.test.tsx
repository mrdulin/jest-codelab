import { Button } from '.';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('59770174', () => {
  it('should call action once', (done) => {
    let callCount = 0;
    const action = jest.fn().mockImplementation(() => {
      callCount++;
    });
    const { getByTestId } = render(<Button action={action} />);

    fireEvent.click(getByTestId('button'));
    fireEvent.click(getByTestId('button'));
    fireEvent.click(getByTestId('button'));

    const lastCount = callCount;
    expect(lastCount).toBe(1);

    setTimeout(() => {
      console.log(callCount, lastCount);
      expect(callCount).toBe(lastCount);
      expect(action).toBeCalledTimes(1);
      done();
    }, 64);
  });
});
