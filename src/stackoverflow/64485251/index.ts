import { createWriteStream, ReadStream } from 'fs';
import { join } from 'path';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream(): ReadStream;
}

export class FileService {
  public saveFile({ createReadStream, filename }: FileUpload): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      createReadStream().pipe(
        createWriteStream(join(process.cwd(), `apps/mull-api/uploads/${filename}`))
          .on('finish', () => resolve(true))
          .on('error', () => {
            reject(false);
          }),
      );
    });
  }
}
