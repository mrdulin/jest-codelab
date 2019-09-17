import React from 'react';
import TestRenderer, { ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import { Button, IButtonOwnProps } from './Button';

describe('Button', () => {
  let testRenderer: ReactTestRenderer;
  let instance: ReactTestInstance;
  beforeAll(() => {
    testRenderer = TestRenderer.create(<Button text="TextButton" />);
    instance = testRenderer.root;
  });

  it('renders with correct props', () => {
    const buttonProps = instance.findByType('button').props.children;
    expect(buttonProps).toBe('TextButton');
  });

  it('executes onClick function', () => {
    const clickHandler = jest.fn();
    const element = ReactTestUtils.renderIntoDocument<IButtonOwnProps, Button>(<Button onClick={clickHandler} />);
    const buttonElement = ReactTestUtils.findRenderedDOMComponentWithTag(element, 'button');
    ReactTestUtils.Simulate.click(buttonElement);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
