import React from 'react';
import XComponent from './';
import { shallow } from 'enzyme';

const FormDataMock = {
  append: jest.fn(),
  entries: jest.fn()
};

describe('XComponent', () => {
  const mockedFormEvent = { target: { querySelectorAll: jest.fn() }, preventDefault: jest.fn() };

  beforeEach(() => {
    (global as any).FormData = jest.fn(() => FormDataMock);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should build form data correctly without select tags', () => {
    mockedFormEvent.target.querySelectorAll.mockReturnValueOnce([]);
    FormDataMock.entries.mockReturnValueOnce([['k1', 'v1'], ['k2', 'v2'], ['k3', 'v3']]);
    const wrapper = shallow(<XComponent></XComponent>);
    const actualValue = (wrapper.instance() as any).buildFormData(mockedFormEvent);
    expect(actualValue).toEqual({ k1: 'v1', k2: 'v2', k3: 'v3' });
    expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
    expect(mockedFormEvent.target.querySelectorAll).toBeCalledWith('.ant-select');
    expect((global as any).FormData).toBeCalledTimes(1);
  });

  it('should build form data correctly with select tags', () => {
    const mockedSelectTag = { querySelector: jest.fn().mockReturnThis(), getAttribute: jest.fn() };
    const mockedSelectTags = [mockedSelectTag];
    (mockedSelectTag.querySelector().getAttribute as any).mockReturnValueOnce('value').mockReturnValueOnce('property');
    mockedFormEvent.target.querySelectorAll.mockReturnValue(mockedSelectTags);
    FormDataMock.entries.mockReturnValueOnce([['k1', 'v1'], ['k2', 'v2'], ['k3', 'v3']]);
    const wrapper = shallow(<XComponent></XComponent>);
    const actualValue = (wrapper.instance() as any).buildFormData(mockedFormEvent);
    expect((global as any).FormData).toBeCalledTimes(1);
    expect(actualValue).toEqual({ k1: 'v1', k2: 'v2', k3: 'v3' });
    expect(FormDataMock.append).toBeCalledWith('property', 'value');
    expect(mockedFormEvent.preventDefault).toBeCalledTimes(1);
    expect(mockedFormEvent.target.querySelectorAll).toBeCalledWith('.ant-select');
  });
});
