import { SomeComponent } from '.';
import React, { useRef } from 'react';
import { render } from '@testing-library/react';

jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    useRef: jest.fn(),
  };
});

describe('64646680', () => {
  it.skip('should pass', () => {
    const mDivRef = { current: { addEventListener: jest.fn() } };
    (useRef as any).mockReturnValue(mDivRef);
    const { getByTestId } = render(<SomeComponent></SomeComponent>);
    const div = getByTestId('test-div');
    const addEventListenerSpy = jest.spyOn(div, 'addEventListener');
    expect(addEventListenerSpy).toBeCalledWith('mousedown', expect.any(Function));
    // expect(mDivRef.current.addEventListener).toBeCalledWith('mousedown', expect.any(Function));
  });
});
