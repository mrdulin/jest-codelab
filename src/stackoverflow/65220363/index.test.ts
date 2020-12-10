import { sbConnect } from './';
import SendBird from 'sendbird';

const mSendBirdInstance = {
  connect: jest.fn(),
};
jest.mock('sendbird', () => {
  return jest.fn(() => mSendBirdInstance);
});

describe('65220363', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should get user', async () => {
    const mUser = { name: 'teresa teng' };
    mSendBirdInstance.connect.mockImplementationOnce((userId, API_Token, callback) => {
      callback(mUser, null);
    });
    const actual = await sbConnect('1');
    expect(actual).toEqual(mUser);
    expect(SendBird).toBeCalledWith({ appId: 'test api id' });
    expect(mSendBirdInstance.connect).toBeCalledWith('1', 'test api token', expect.any(Function));
  });

  it('should handle error', async () => {
    const mError = new Error('network');
    mSendBirdInstance.connect.mockImplementationOnce((userId, API_Token, callback) => {
      callback(null, mError);
    });
    await expect(sbConnect('1')).rejects.toThrow(mError);
    expect(SendBird).toBeCalledWith({ appId: 'test api id' });
    expect(mSendBirdInstance.connect).toBeCalledWith('1', 'test api token', expect.any(Function));
  });
});
