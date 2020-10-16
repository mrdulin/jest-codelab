const main = require('./app');
const crypto = require('crypto');

jest.mock('crypto', () => {
  return {
    createHmac: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    digest: jest.fn(() => '123'),
  };
});

describe('64386858', () => {
  it('should pass', () => {
    const logSpy = jest.spyOn(console, 'log');
    main();
    expect(crypto.createHmac).toBeCalledWith('sha256', 'API_TOKEN');
    expect(crypto.update).toBeCalledWith(JSON.stringify({}));
    expect(crypto.digest).toBeCalledWith('hex');
    expect(logSpy).toBeCalledWith('verified successfully. Implement next logic');
    logSpy.mockRestore();
  });
});
