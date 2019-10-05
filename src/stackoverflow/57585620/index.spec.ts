import sendMessage from './';
import AWS from 'aws-sdk';

jest.mock('aws-sdk', () => {
  const SQSMocked = {
    sendMessage: jest.fn().mockReturnThis(),
    promise: jest.fn()
  };
  return {
    SQS: jest.fn(() => SQSMocked)
  };
});

const sqs = new AWS.SQS({
  region: 'us-east-1'
});

describe.only('Test case for SQS SendMessage', () => {
  beforeEach(() => {
    (sqs.sendMessage().promise as jest.MockedFunction<any>).mockReset();
  });
  it('should return the UserEvent', async () => {
    expect(jest.isMockFunction(sqs.sendMessage)).toBeTruthy();
    expect(jest.isMockFunction(sqs.sendMessage().promise)).toBeTruthy();
    (sqs.sendMessage().promise as jest.MockedFunction<any>).mockResolvedValueOnce('mocked data');
    const actualValue = await sendMessage('testURL', 'data');
    expect(actualValue).toEqual('mocked data');
    expect(sqs.sendMessage).toBeCalledWith({ MessageBody: '"testURL"', QueueUrl: 'data' });
    expect(sqs.sendMessage().promise).toBeCalledTimes(1);
  });

  it('should throw an error when send message error', async () => {
    const sendMessageErrorMessage = 'network error';
    (sqs.sendMessage().promise as jest.MockedFunction<any>).mockRejectedValueOnce(sendMessageErrorMessage);
    await expect(sendMessage('testURL', 'data')).rejects.toThrowError(new Error(sendMessageErrorMessage));
    expect(sqs.sendMessage).toBeCalledWith({ MessageBody: '"testURL"', QueueUrl: 'data' });
    expect(sqs.sendMessage().promise).toBeCalledTimes(1);
  });
});
