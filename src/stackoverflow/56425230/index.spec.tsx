import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from './';

describe('Header', () => {
  it.skip('match snapshot', () => {
    jest.spyOn(Date, 'now').mockReturnValueOnce(new Date('2019-11-24T00:00:00Z').getTime());
    const wrapper: ShallowWrapper = shallow(<Header></Header>);
    expect(wrapper.text()).toBe(new Date('2019-11-24T00:00:00Z').toISOString());
    expect(wrapper).toMatchSnapshot();
  });
});
