import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { TextInputWithFocusButton } from './';

describe('TextInputWithFocusButton', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test('should render correctly', () => {
    act(() => {
      render(<TextInputWithFocusButton />, container);
    });
    const button = container.querySelector('button') as HTMLButtonElement;
    expect(button.textContent).toBe('Focus the input');
    const input = container.querySelector('input') as HTMLInputElement;
    expect(input.type).toBe('text');
  });

  test('should handle click and focus input when current of ref is not null', () => {
    act(() => {
      render(<TextInputWithFocusButton />, container);
    });
    const button = container.querySelector('button') as HTMLButtonElement;
    const input = container.querySelector('input') as HTMLInputElement;
    const focusSpy = jest.spyOn(input, 'focus');
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(focusSpy).toBeCalledTimes(1);
    focusSpy.mockRestore();
  });
});
