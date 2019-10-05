import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import DashboardChart from './DashboardChart';
import getIntentsSince from './getIntentsSince';

jest.mock('./getIntentsSince.ts', () => jest.fn());

describe('Dashboard Page test cases', () => {
  let wrapper: ReactWrapper;
  beforeAll(() => {
    wrapper = mount(<DashboardChart />);
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should get indents since correctly', async () => {
    const mockedResponse = 'mocked response';
    (getIntentsSince as jest.MockedFunction<typeof getIntentsSince>).mockResolvedValueOnce(mockedResponse);
    const logSpy = jest.spyOn(console, 'log');
    const actualValue = await (wrapper.instance() as any).initializeCharts();
    expect(actualValue).toBeUndefined();
    expect(logSpy).toBeCalledWith(mockedResponse);
    expect(getIntentsSince).toBeCalledWith('2019', '2019');
  });
});
