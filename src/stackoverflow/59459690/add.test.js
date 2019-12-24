const formidable = require('formidable');
const { addAccount } = require('./add');
const validator = require('./validator');

jest.mock('formidable', () => {
  const mForm = {
    multiples: false,
    parse: jest.fn(),
  };
  return {
    IncomingForm: jest.fn(() => mForm),
  };
});

describe('59459690', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it('return Error on validation error', async () => {
    const fields = {
      accountType: 'moderator',
      title: 'Title',
    };
    const files = {};
    const form = new formidable.IncomingForm();
    let originalCallback;
    form.parse.mockImplementation((req, callback) => {
      originalCallback = callback;
    });
    const mError = new Error('validation error');
    jest.spyOn(validator, 'validate').mockRejectedValueOnce(mError);

    const mReq = {
      body: {},
      dbConnection: jest.fn(),
    };
    const mRes = {
      send: jest.fn().mockReturnThis(),
    };
    const mNext = jest.fn().mockName('next function');

    await addAccount(mReq, mRes, mNext);
    await originalCallback(undefined, fields, files);

    expect(form.parse).toHaveBeenCalledTimes(1);
    expect(form.parse).toHaveBeenCalledWith(mReq, expect.any(Function));

    expect(mNext).toHaveBeenCalledTimes(1);
  });
});
