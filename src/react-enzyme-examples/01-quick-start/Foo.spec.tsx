import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from './Foo';

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
  });

  it('should be selectable by class "foo"', () => {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it('should mount in a full DOM', () => {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });

  it('should render to static HTML', () => {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});
