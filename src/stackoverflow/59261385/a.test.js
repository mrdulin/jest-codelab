const request = require('request-promise');
const moduleA = require('./a');

// jest.mock('request-promise', () => {
//   return {
//     post: jest.fn(),
//   };
// });

describe('59261385', () => {
  beforeAll(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  test('Update function', async () => {
    // request.post.mockResolvedValueOnce({ result: [] });
    const postSpy = jest.spyOn(request, 'post').mockResolvedValueOnce({ result: [] });
    const actual = await moduleA();
    expect(actual).toEqual({ result: [] });
    expect(postSpy).toBeCalledWith({
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
