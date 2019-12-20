import MyClass from './users';
import axios from 'axios';

jest.mock('axios', () => {
  return {
    post: jest.fn(() => Promise.resolve({ data: {} })),
  };
});

describe('59416347', () => {
  let myClass;
  beforeEach(() => {
    myClass = new MyClass({ env: 'prod' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockResponseData = jest.fn((success, payload) => {
    return {
      data: {
        result: {
          success,
          payload,
        },
      },
    };
  });

  test('should return all the users', async () => {
    const successHandler = jest.fn();
    const errorHandler = jest.fn();
    const users = mockResponseData(true, ['John Doe', 'Charles']);

    axios.post.mockImplementationOnce(() => {
      return Promise.resolve(users);
    });

    const response = await myClass.getUsers('url', {}, successHandler, errorHandler);
    console.log(response);
    expect(response.data.result).toEqual({ success: true, payload: ['John Doe', 'Charles'] });
    expect(successHandler).toHaveBeenCalledTimes(1);
  });
});
