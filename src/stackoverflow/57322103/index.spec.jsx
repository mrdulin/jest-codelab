import React from 'react';
import SomeComponent from '.';
import { shallow } from 'enzyme';

describe('SomeComponent', () => {
  it('it should dispatch action', () => {
    const actionsMock = { getSomething: jest.fn() };
    const localWrapper = shallow(<SomeComponent actions={actionsMock} />);
    const instance = localWrapper.instance();
    instance.componentDidMount();
    expect(actionsMock.getSomething).toHaveBeenCalled();
  });
});
