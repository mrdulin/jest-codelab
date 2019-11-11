import { executeCommandPromise } from './';
import cp, { ChildProcess, ExecException } from 'child_process';

describe('executeCommandPromise', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test('should exec command correctly', async () => {
    let execCallback: (error: ExecException | null, stdout: string, stderr: string) => void;
    jest
      .spyOn(cp, 'exec')
      .mockImplementation(function(
        this: ChildProcess,
        command: string,
        options: any,
        callback?: (error: ExecException | null, stdout: string, stderr: string) => void
      ): ChildProcess {
        if (callback) {
          execCallback = callback;
        }
        return this;
      });
    const actualValue = executeCommandPromise('somefile', 'ls -a');
    execCallback!(null, '', '');
    await expect(actualValue).resolves.toBe('capRunnable');
    expect(cp.exec).toBeCalledWith('ls -a', { cwd: 'somefile' }, execCallback!);
  });

  test('should throw error when exec command failed', async () => {
    let execCallback: (error: ExecException | null, stdout: string, stderr: string) => void;
    jest
      .spyOn(cp, 'exec')
      .mockImplementation(function(
        this: ChildProcess,
        command: string,
        options: any,
        callback?: (error: ExecException | null, stdout: string, stderr: string) => void
      ): ChildProcess {
        if (callback) {
          execCallback = callback;
        }
        return this;
      });
    const actualValue = executeCommandPromise('somefile', 'ls -a');
    execCallback!(new Error('some error happened'), '', '');
    await expect(actualValue).rejects.toThrowError('some error happened');
    expect(cp.exec).toBeCalledWith('ls -a', { cwd: 'somefile' }, execCallback!);
  });
});
