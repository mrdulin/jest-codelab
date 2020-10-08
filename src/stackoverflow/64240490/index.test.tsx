import React from 'react';
import { shallow } from 'enzyme';

describe('64240490', () => {
  it('should pass', () => {
    const wrapper = shallow(
      <div>
        <button className="foo">xx</button>
        <span className="foo">foo</span>
      </div>,
    );
    expect(wrapper.contains(<button className="foo">xx</button>)).toBeTruthy();
    expect(wrapper.find('.foo').filter('button')).toHaveLength(1);
  });
});

const wrapper = shallow(
  <div>
    <button>xx</button>
  </div>,
);

console.log(wrapper.html()); //  <div><button>xx</button></div>

console.log(wrapper.contains('button')); // false
console.log(wrapper.filter('button')); // false
