const request = require('request');
const Ctrl = require('./ctrl');

jest.mock('request', () => ({
  post: jest.fn(),
}));

describe('Test suite for controller', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should return true for successful validation', async () => {
    request.post.mockImplementationOnce((body, callback) => {
      callback(null);
    });
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await Ctrl.validate(req, res);
    expect(request.post).toBeCalledWith(
      {
        url: 'url',
        form: {},
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      expect.any(Function),
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeCalledWith({ result: 'true' });
  });

  test('should handle error for failed validation', async () => {
    const mErr = new Error('network');
    request.post.mockImplementationOnce((body, callback) => {
      callback(mErr);
    });
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    await Ctrl.validate(req, res);
    expect(request.post).toBeCalledWith(
      {
        url: 'url',
        form: {},
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      expect.any(Function),
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toBeCalledWith({ result: 'false' });
  });
});
