const request = require('request-promise');
const moduleA = require('./a');

jest.mock('request-promise', () => {
  return {
    post: jest.fn(),
  };
});

describe('59261385', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('Update function', async () => {
    request.post.mockResolvedValueOnce({ result: [] });
    const actual = await moduleA();
    expect(actual).toEqual({ result: [] });
    expect(request.post).toBeCalledWith({
      uri: 'fsdsfd',
      headers: {
        'content-type': 'application/json',
      },
      body: {
        A: 'A',
        B: 'B',
      },
      json: true,
    });
  });
});
