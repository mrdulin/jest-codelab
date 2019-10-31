import React from 'react';
import SampleComponent from '.';
import ReactDOM from 'react-dom';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('SampleComponent', () => {
  let container: HTMLDivElement | null = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  test('should handle click correctly', () => {
    const logSpy = jest.spyOn(console, 'log');
    act(() => {
      ReactDOM.render(<SampleComponent></SampleComponent>, container);
    });

    const button = (container as HTMLDivElement).querySelector('button') as HTMLButtonElement;
    expect(button.textContent).toBe('Click Me');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(logSpy).toBeCalledWith('hello world');
  });
});
