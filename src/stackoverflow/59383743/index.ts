const unzipArchiveAndUploadToS3 = async () => null;

type TransformFunctionArgs = any;
export enum TransformationType {
  UNZIP = 'UNZIP',
  NOOP = 'NOOP',
}

export const transformFuncMap: { [key: string]: (args: TransformFunctionArgs) => Promise<any> } = {
  [TransformationType.UNZIP]: unzipArchiveAndUploadToS3,
  // tslint:disable-next-line: no-empty
  [TransformationType.NOOP]: async () => {},
};

export async function handle(funcKeys: TransformationType[]) {
  for (const funcKey of funcKeys) {
    const args = {};
    await transformFuncMap[funcKey](args);
  }
}
