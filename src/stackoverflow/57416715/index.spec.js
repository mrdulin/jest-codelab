jest.mock('request-promise-native', () => {
  return {
    post: jest.fn()
  };
});

const request = require('request-promise-native');
const ReCaptcha = require('.');

describe('Lib - ReCaptcha test', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should request captcha verification', async () => {
    const value = 'foo';
    const expected = true;

    const postSpy = jest.spyOn(request, 'post').mockResolvedValue({ success: true });

    const result = await ReCaptcha.verify(value);

    expect(result).toEqual(expected);
    expect(postSpy).toBeCalledWith({
      url: 'https://www.google.com/recaptcha/api/siteverify',
      qs: { secret: null, response: 'foo' },
      json: true
    });
  });
});
