import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from './myComponent';
import { Service } from './service';

jest.mock('./service.ts', () => {
  const mockedService = {
    uploadSomething: jest.fn()
  };
  return {
    Service: jest.fn(() => mockedService)
  };
});

const service = new Service();

describe('MyComponent', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('should upload file correctly', async () => {
    const event = {
      target: {
        href: 'test'
      }
    };
    const mockedResponse = { data: 'mocked response' };
    (service.uploadSomething as jest.MockedFunction<typeof service.uploadSomething>).mockResolvedValueOnce(
      mockedResponse
    );
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<MyComponent></MyComponent>);
    const myComponentInstance = wrapper.instance() as any;
    const actualValue = await myComponentInstance.onUploadFile(event);
    expect(actualValue).toBeUndefined();
    expect(logSpy).toBeCalledWith(mockedResponse.data);
  });
});
