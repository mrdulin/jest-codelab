jest.mock('aws-sdk', () => {
  const mockedSSM = {
    getParameter: jest.fn().mockReturnThis(),
    promise: jest.fn()
  };
  const mockedConfig = {
    update: jest.fn()
  };
  return {
    SSM: jest.fn(() => mockedSSM),
    config: mockedConfig
  };
});

const helpers = require('.');
const aws = require('aws-sdk');
const ssm = new aws.SSM();

describe('helpers', () => {
  it('get parameter', async () => {
    const mockedResponseData = {
      Parameter: {
        Name: 'StripeSecretKey',
        Type: 'SecureString',
        Value: 'myVal',
        Version: 1,
        LastModifiedDate: 1530018761.888,
        ARN: 'arn:aws:ssm:us-east-1:123456789012:parameter/helloSecureWorld'
      }
    };

    ssm.getParameter().promise.mockResolvedValueOnce(mockedResponseData);
    const data = await helpers.getSsmVar('StripeSecretKey');
    expect(data).toEqual(mockedResponseData);
    expect(ssm.getParameter).toBeCalledWith({ Name: `/mybox/StripeSecretKey`, WithDecryption: true });
    expect(ssm.getParameter().promise).toBeCalledTimes(1);
  });
});
