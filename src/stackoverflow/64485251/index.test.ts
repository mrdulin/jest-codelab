import { FileService, FileUpload } from './';
import { createWriteStream, WriteStream } from 'fs';
import { mocked } from 'ts-jest/utils';

jest.mock('fs');

describe('64485251', () => {
  afterAll(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
  });
  it('should save file', async () => {
    const mockReadStream = { pipe: jest.fn() };
    const mockFile: FileUpload = {
      filename: 'zoro',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      createReadStream: jest.fn().mockReturnValueOnce(mockReadStream),
    };
    const mockWriteStream = {
      on: jest.fn().mockImplementation(function(this, event, handler) {
        if (event === 'finish') {
          handler();
        }
        return this;
      }),
    };
    mocked(createWriteStream).mockReturnValueOnce((mockWriteStream as unknown) as WriteStream);
    const service = new FileService();
    const actual = await service.saveFile(mockFile);
    expect(mockFile.createReadStream).toBeCalledTimes(1);
    expect(mockReadStream.pipe).toBeCalledTimes(1);
    expect(createWriteStream).toBeCalledWith(expect.stringContaining('apps/mull-api/uploads/zoro'));
    expect(mockWriteStream.on).toBeCalledWith('finish', expect.any(Function));
    expect(mockWriteStream.on).toBeCalledWith('error', expect.any(Function));
    expect(actual).toBeTruthy();
  });

  it('should handle error if save file failed', async () => {
    const mockReadStream = { pipe: jest.fn() };
    const mockFile: FileUpload = {
      filename: 'zoro',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      createReadStream: jest.fn().mockReturnValueOnce(mockReadStream),
    };
    const mockWriteStream = {
      on: jest.fn().mockImplementation(function(this, event, handler) {
        if (event === 'error') {
          handler();
        }
        return this;
      }),
    };
    mocked(createWriteStream).mockReturnValueOnce((mockWriteStream as unknown) as WriteStream);
    const service = new FileService();
    await expect(service.saveFile(mockFile)).rejects.toEqual(false);
    expect(mockFile.createReadStream).toBeCalledTimes(1);
    expect(mockReadStream.pipe).toBeCalledTimes(1);
    expect(createWriteStream).toBeCalledWith(expect.stringContaining('apps/mull-api/uploads/zoro'));
    expect(mockWriteStream.on).toBeCalledWith('finish', expect.any(Function));
    expect(mockWriteStream.on).toBeCalledWith('error', expect.any(Function));
  });
});
