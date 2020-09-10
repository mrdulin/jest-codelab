import * as utils from './';
import * as exec from './exec';
import { mocked } from 'ts-jest/utils';

jest.mock('./exec');

describe('63820836', () => {
  it(`should return the command output`, async () => {
    const stdOutBuffer: Buffer = new Buffer('The is some output');
    let optionsRef;
    mocked(exec.exec).mockImplementationOnce(async (command, _, options) => {
      optionsRef = options;
      options.listeners.stdout(stdOutBuffer);
    });
    const { output } = await utils.executeCommand('');
    expect(output).toEqual('The is some output');
    expect(exec.exec).toBeCalledWith('', null, optionsRef);
  });

  it('should return the command error', async () => {
    const stdErrBuffer: Buffer = new Buffer('This is some error');
    let optionsRef;
    mocked(exec.exec).mockImplementationOnce(async (command, _, options) => {
      optionsRef = options;
      options.listeners.stderr(stdErrBuffer);
    });
    const { error } = await utils.executeCommand('');
    expect(error).toEqual('This is some error');
    expect(exec.exec).toBeCalledWith('', null, optionsRef);
  });
});
