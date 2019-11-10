import React from 'react';
import { shallow } from 'enzyme';
import { Comp } from './';

describe('Comp', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('should do nothing if ref does not exist', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
    const component = shallow(<Comp></Comp>);
    component.find('button').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
  });

  it('should handle click', () => {
    const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: document.createElement('button') });
    const mock = jest.fn();
    const component = shallow(<Comp onHandle={mock}></Comp>);
    component.find('button').simulate('click');
    expect(useRefSpy).toBeCalledWith(null);
    expect(mock).toBeCalledTimes(1);
  });
});
