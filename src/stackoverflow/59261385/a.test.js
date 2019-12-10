const request = require('request-promise');
const moduleA = require('./a');

jest.mock('request-promise', () => jest.fn());

describe('59261385', () => {
  test('Update function', async () => {
    request.mockResolvedValueOnce({ result: [] });
    const actual = await moduleA();
    expect(actual).toEqual({ result: [] });
    expect(request).toBeCalledWith({
      method: 'POST',
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
