import React from 'react';
import Button from '.';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('should render without throwing an error ', () => {
    const component = renderer.create(<Button action={''} path={'Cancel'} />);
    expect(
      shallow(<Button action={''} path={'Cancel'} />)
        .find('div.container')
        .exists()
    ).toBe(true);
  });
});
