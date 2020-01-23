const index = require('.');
const aws = require('aws-sdk');

jest.mock('aws-sdk', () => {
  const mSes = {
    sendTemplatedEmail: jest.fn(),
  };
  return { SES: jest.fn(() => mSes) };
});

describe('59877312', () => {
  let ses;
  beforeEach(() => {
    ses = new aws.SES();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('sesSendEmail', () => {
    it('should send templated email success', () => {
      jest.spyOn(console, 'log');
      const mData = {};
      ses.sendTemplatedEmail.mockImplementationOnce((params, callback) => {
        callback(null, mData);
      });
      const message = 'mock message';
      index.sesSendEmail(message);
      expect(aws.SES).toBeCalledWith({ apiVersion: '2020-12-01' });
      expect(ses.sendTemplatedEmail).toBeCalledWith(
        {
          Source: 'xyz@gmail.com',
          Template: 'deviceUsageStatisticsEmailTemplate',
          Destination: {
            ToAddresses: ['abc@gmail.com'],
          },
          TemplateData: message,
        },
        expect.any(Function),
      );
      expect(console.log).toBeCalledWith(mData);
    });

    it('should handle error', () => {
      jest.spyOn(console, 'error');
      const mError = new Error('network error');
      ses.sendTemplatedEmail.mockImplementationOnce((params, callback) => {
        callback(mError, null);
      });
      const message = 'mock message';
      index.sesSendEmail(message);
      expect(aws.SES).toBeCalledWith({ apiVersion: '2020-12-01' });
      expect(ses.sendTemplatedEmail).toBeCalledWith(
        {
          Source: 'xyz@gmail.com',
          Template: 'deviceUsageStatisticsEmailTemplate',
          Destination: {
            ToAddresses: ['abc@gmail.com'],
          },
          TemplateData: message,
        },
        expect.any(Function),
      );
      expect(console.error).toBeCalledWith(mError);
    });
  });
});
