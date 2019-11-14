import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from './';

describe('Header', () => {
  it('match snapshot', () => {
    jest.spyOn(Date, 'now').mockReturnValueOnce(new Date('2019/11/24').getTime());
    const wrapper: ShallowWrapper = shallow(<Header></Header>);
    expect(wrapper.text()).toBe(new Date('2019/11/24').toISOString());
    expect(wrapper).toMatchSnapshot();
  });
});
