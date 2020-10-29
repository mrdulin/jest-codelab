const { myCloudFn } = require('./send');
const admin = require('firebase-admin');

jest.mock(
  'firebase-admin',
  () => {
    const mAdmin = {
      auth: jest.fn().mockReturnThis(),
      getUserByEmail: jest.fn(),
    };
    return mAdmin;
  },
  { virtual: true },
);

describe('send.js', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should returns authUser from myCloudFn()', async () => {
    admin.auth().getUserByEmail.mockResolvedValueOnce({ uid: 'foo-bar' });
    const actual = await myCloudFn();
    expect(actual).toEqual({ uid: 'foo-bar' });
  });
  it('should return null', async () => {
    admin.auth().getUserByEmail.mockResolvedValueOnce(null);
    const actual = await myCloudFn();
    expect(actual).toBeNull();
  });
});
