import React from 'react';
import TestRenderer from 'react-test-renderer';
import { App } from './';

describe('App', () => {
  it('t1', () => {
    const testRenderer = TestRenderer.create(<App></App>);
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    if (tree) {
      tree.props.onKeyDown({ keyCode: 37 });
    }
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    if (tree) {
      tree.props.onKeyDown({ keyCode: 38 });
    }
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    if (tree) {
      tree.props.onKeyDown({ keyCode: 39 });
    }
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    if (tree) {
      tree.props.onKeyDown({ keyCode: 40 });
    }
    tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
