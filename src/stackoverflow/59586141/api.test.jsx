import App from './app';
import { mount } from 'enzyme';
import { fetchData } from './api';
import { act } from 'react-dom/test-utils';

jest.mock('./api.js', () => {
  return {
    fetchData: jest.fn(),
  };
});

describe('59586141', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch data correctly', async () => {
    const mResponse = { data: { id: 1 } };
    const mProps = { id: 1 };
    fetchData.mockResolvedValueOnce(mResponse);
    const wrapper = mount(<App {...mProps}></App>);
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.find('div').text()).toBe('fetching...');
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find('pre').text()).toBe(JSON.stringify(mResponse.data));
    expect(fetchData).toBeCalledWith(1);
  });

  it('should handle error if fetch data failure', async () => {
    const mError = new Error('some network error');
    const mProps = { id: 1 };
    fetchData.mockRejectedValueOnce(mError);
    const wrapper = mount(<App {...mProps}></App>);
    expect(wrapper.exists).toBeTruthy();
    expect(wrapper.find('div').text()).toBe('fetching...');
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    wrapper.update();
    expect(wrapper.find('pre').text()).toBe(JSON.stringify(mError));
    expect(fetchData).toBeCalledWith(1);
  });
});
