import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Header } from './';

describe('Header', () => {
  it('match snapshot', () => {
    jest.spyOn(Date, 'now').mockReturnValueOnce(new Date('2019/11/24').getTime());
    const wrapper: ShallowWrapper = shallow(<Header></Header>);
    expect(wrapper.text()).toBe('Tue Dec 24 2019 00:00:00 GMT+0800');
    expect(wrapper).toMatchSnapshot();
  });
});
