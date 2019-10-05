import React from 'react';
import { SomeCompoennt } from './';
import { shallow, ShallowWrapper } from 'enzyme';

describe('SomeCompoennt', () => {
  const mockProps = {
    object: {
      objectId: '12'
    },
    fetchObjectDetails: jest.fn()
  };

  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(<SomeCompoennt {...mockProps}></SomeCompoennt>);
    mockProps.fetchObjectDetails.mockClear();
  });

  test('should shallow render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should call reloadObjectDetails when objectId has changed', () => {
    const objectId = '123';
    const nextProps = { object: { objectId } };
    const spy = jest.spyOn(SomeCompoennt.prototype, 'componentWillReceiveProps');
    const reloadObjectDetailsSpy = jest.spyOn(SomeCompoennt.prototype as any, 'reloadObjectDetails');
    wrapper.setProps(nextProps);
    expect(reloadObjectDetailsSpy).toBeCalledWith(objectId);
    expect(spy).toBeCalledTimes(1);
    expect(mockProps.fetchObjectDetails).toBeCalledWith(objectId);
    expect(wrapper).toMatchSnapshot();
  });
});
