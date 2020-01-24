import React from 'react';
import { shallow } from 'enzyme';
import Comp from './';

describe.skip('Comp', () => {
  it('should render', () => {
    const noop = () => null;
    const wrapper = shallow(<Comp onChange={noop} />);
    expect(
      wrapper.contains(
        <form>
          <input type="text" placeholder="username" onChange={noop} />
        </form>,
      ),
    ).toBeTruthy();
  });
});
