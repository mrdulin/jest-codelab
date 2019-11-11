import React from 'react';
import { MyComponent } from './';
import renderer, { act } from 'react-test-renderer';

describe('myComponent', () => {
  test('should renders correctly', async () => {
    const mProps = {
      text: 'text',
      list: [],
      getData: jest.fn().mockResolvedValueOnce([{ id: 1 }, { id: 2 }, { id: 3 }])
    };
    let component;
    await act(async () => {
      component = renderer.create(<MyComponent {...mProps}></MyComponent>);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
