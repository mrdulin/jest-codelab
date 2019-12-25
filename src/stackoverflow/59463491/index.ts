import { Lambda } from 'aws-sdk';
import fsReadFilePromise from 'fs-readfile-promise';

export class AWSLambdaDeployer {
  private readonly mylambda: Lambda;
  constructor(lambda: Lambda) {
    this.mylambda = lambda;
  }

  public async deploy(zipPath: string, fName: string) {
    const fileData = await fsReadFilePromise(zipPath);

    const params: Lambda.Types.UpdateFunctionCodeRequest = {
      FunctionName: fName,
      ZipFile: fileData,
      Publish: true,
    };

    return this.mylambda.updateFunctionCode(params).promise();
  }
}
