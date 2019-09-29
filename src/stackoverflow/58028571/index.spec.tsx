import React from 'react';
import XComponent from './';
import { shallow } from 'enzyme';

let map = {};
document.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});

describe('XComponent', () => {
  let domElementEventMap = {};
  const mockedDomElement: any = {
    addEventListener: jest.fn((event, cb) => {
      domElementEventMap[event] = cb;
    })
  };

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
    map = {};
    domElementEventMap = {};
  });
  it('should call onWheel method', () => {
    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValueOnce(mockedDomElement);
    const wrapper = shallow(<XComponent></XComponent>);
    expect(wrapper.text()).toBe('XComponent');
    expect(getElementByIdSpy).toBeCalledWith('myImg');
    expect(mockedDomElement.addEventListener).toBeCalledWith('load', (wrapper.instance() as any).load);
    (domElementEventMap as any).load();
    expect(mockedDomElement.addEventListener).toBeCalledWith('wheel', (wrapper.instance() as any).onWheel);
  });

  it('should not add load event when dom element does not exist', () => {
    const getElementByIdSpy = jest.spyOn(document, 'getElementById').mockReturnValueOnce(null);
    const wrapper = shallow(<XComponent></XComponent>);
    expect(wrapper.text()).toBe('XComponent');
    expect(getElementByIdSpy).toBeCalledWith('myImg');
    expect(mockedDomElement.addEventListener).not.toBeCalled();
  });
});
