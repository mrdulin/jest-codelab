import React from 'react';
import Link from './';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>);
  let tree: ReactTestRendererJSON | null = component.toJSON();
  expect(tree).toMatchSnapshot();

  if (tree) {
    // manually trigger the callback
    tree.props.onMouseEnter();
  }
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  if (tree) {
    // manually trigger the callback
    tree.props.onMouseLeave();
  }
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
