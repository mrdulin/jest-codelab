import { AggregationPageContent } from './AggregationPageContent';
import { ajaxGet } from './_utility';
import { shallow } from 'enzyme';

jest.mock('./_utility.js', () => {
  return {
    ajaxGet: jest.fn(),
  };
});

describe('AggregationPageContent', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should pass', () => {
    let successCallback;
    ajaxGet.mockImplementationOnce(({ url, success }) => {
      successCallback = success;
    });
    const wrapper = shallow(<AggregationPageContent></AggregationPageContent>);
    expect(wrapper.exists()).toBeTruthy();
    const mResponse = [];
    successCallback(mResponse);
    expect(wrapper.state()).toEqual({ data: [], page: 1 });
    expect(ajaxGet).toBeCalledWith({ url: 'https://example.com/category/1?page=0', success: successCallback });
  });
});
