const sendPushoverNotification = require('.');
const Push = require('pushover-notifications');

jest.mock(
  'pushover-notifications',
  () => {
    const mPush = { send: jest.fn() };
    return jest.fn(() => mPush);
  },
  { virtual: true },
);

describe('59942177', () => {
  it('should send notification', () => {
    const p = new Push();
    const mResult = JSON.stringify({ status: 1 });
    p.send.mockImplementationOnce((msg, callback) => {
      callback(null, mResult);
    });
    const logSpy = jest.spyOn(console, 'log');
    sendPushoverNotification('message');
    expect(Push).toBeCalledWith({ user: undefined, token: undefined, onerror: expect.any(Function) });
    expect(p.send).toBeCalledWith(
      { message: 'message', title: 'Title', sound: 'pushover', priority: 1 },
      expect.any(Function),
    );
    expect(logSpy).toBeCalledWith('[Pushover] Push notification sent.');
  });

  it('should handle error if status is not equal 1', () => {
    const p = new Push();
    const mResult = JSON.stringify({ status: 2 });
    p.send.mockImplementationOnce((msg, callback) => {
      callback(null, mResult);
    });
    const errorLogSpy = jest.spyOn(console, 'error');
    sendPushoverNotification('message');
    expect(Push).toBeCalledWith({ user: undefined, token: undefined, onerror: expect.any(Function) });
    expect(p.send).toBeCalledWith(
      { message: 'message', title: 'Title', sound: 'pushover', priority: 1 },
      expect.any(Function),
    );
    expect(errorLogSpy).toBeCalledWith('[Pushover] An error occurred.');
    expect(errorLogSpy).toBeCalledWith(mResult);
  });

  it('should handle error if push failure', () => {
    const p = new Push();
    const mError = new Error('network error');
    p.send.mockImplementationOnce((msg, callback) => {
      callback(mError);
    });
    const errorLogSpy = jest.spyOn(console, 'error');
    sendPushoverNotification('message');
    expect(Push).toBeCalledWith({ user: undefined, token: undefined, onerror: expect.any(Function) });
    expect(p.send).toBeCalledWith(
      { message: 'message', title: 'Title', sound: 'pushover', priority: 1 },
      expect.any(Function),
    );
    expect(errorLogSpy).toBeCalledWith('[Pushover] An error occurred.');
    expect(errorLogSpy).toBeCalledWith(mError);
  });
});
