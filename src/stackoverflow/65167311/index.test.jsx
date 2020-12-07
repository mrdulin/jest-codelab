import { MyComponent } from './';
import React from 'react';
import { shallow } from 'enzyme';
import { apiService } from './services';

jest.mock('./services', () => {
  const mApiService = {
    getUser: jest.fn(),
  };
  return { apiService: mApiService };
});

const whenStable = async () => await new Promise((resolve) => setTimeout(resolve));

describe('65167311', () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('should get user', async () => {
    apiService.getUser.mockResolvedValueOnce({ name: 'fake user name' });
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<MyComponent></MyComponent>);
    await whenStable();
    expect(logSpy).toBeCalledWith({ name: 'fake user name' });
    expect(apiService.getUser).toBeCalledWith({ contentId: 123 });
  });
  it('should handle error', async () => {
    const mError = new Error('timeout');
    apiService.getUser.mockRejectedValueOnce(mError);
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<MyComponent></MyComponent>);
    await whenStable();
    expect(logSpy).toBeCalledWith(mError);
    expect(apiService.getUser).toBeCalledWith({ contentId: 123 });
  });
});
