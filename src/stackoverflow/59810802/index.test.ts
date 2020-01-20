import { thishandler } from './';
import { SNS } from 'aws-sdk';

jest.mock('aws-sdk', () => {
  const mSNS = {
    publish: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  };
  return { SNS: jest.fn(() => mSNS) };
});

describe('59810802', () => {
  let sns;
  beforeEach(() => {
    sns = new SNS();
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should pass', async () => {
    const THIS_TOPIC_ARN = process.env.THIS_TOPIC_ARN;
    process.env.THIS_TOPIC_ARN = 'OUR-SNS-TOPIC';

    const mockedResponseData = {
      Success: 'OK',
    };
    sns.publish().promise.mockResolvedValueOnce(mockedResponseData);
    const mEvent = {};
    const actual = await thishandler(mEvent);
    expect(actual).toEqual(mockedResponseData);
    expect(sns.publish).toBeCalledWith({ Message: JSON.stringify({}), TopicArn: 'OUR-SNS-TOPIC' });
    expect(sns.publish().promise).toBeCalledTimes(1);
    process.env.THIS_TOPIC_ARN = THIS_TOPIC_ARN;
  });
});
