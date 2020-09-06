import fs, { PathLike } from 'fs';
import { getFile } from './';

describe('63748243', () => {
  it('should read file', async () => {
    const readFileSpy = jest.spyOn(fs, 'readFile').mockImplementation(((
      path: PathLike | number,
      options: { encoding?: null; flag?: string } | undefined | null,
      callback: (err: NodeJS.ErrnoException | null, data: string) => void,
    ) => {
      if (typeof options === 'string' && options === 'utf8') {
        callback(null, '123');
      }
    }) as typeof fs.readFile);
    const actual = await getFile('/fake/path');
    expect(actual).toEqual('123');
    expect(readFileSpy).toBeCalledWith('/fake/path', 'utf8', expect.any(Function));
    readFileSpy.mockRestore();
  });
});
