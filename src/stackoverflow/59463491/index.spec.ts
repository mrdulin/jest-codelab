import { AWSLambdaDeployer } from './';
import fsReadFilePromise from 'fs-readfile-promise';
import AWS from 'aws-sdk';

jest.mock('aws-sdk', () => {
  const mLambda = {
    updateFunctionCode: jest.fn().mockReturnThis(),
    promise: jest.fn(),
  };
  return {
    Lambda: jest.fn(() => mLambda),
  };
});

jest.mock('fs-readfile-promise', () => jest.fn());

describe('59463491', () => {
  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });
  it(' functionality under test', async () => {
    (fsReadFilePromise as any).mockResolvedValueOnce('get it done');

    const lambda = new AWS.Lambda();
    const awslambdaDeployer = new AWSLambdaDeployer(lambda);

    await awslambdaDeployer.deploy('filePath', 'workingFunction');

    expect(fsReadFilePromise).toBeCalledWith('filePath');
    expect(lambda.updateFunctionCode).toBeCalledWith({
      FunctionName: 'workingFunction',
      ZipFile: 'get it done',
      Publish: true,
    });
    expect(lambda.updateFunctionCode().promise).toBeCalledTimes(1);
  });
});
