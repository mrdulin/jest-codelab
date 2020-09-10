import * as exec from './exec';

export const executeCommand = async (command: string): Promise<{ output: string; error: string }> => {
  let output = '';
  let error = '';

  const options: exec.ExecOptions = {
    silent: true,
    listeners: {
      stdout: (data: Buffer) => {
        output += data.toString();
      },
      stderr: (data: Buffer) => {
        error += data.toString();
      },
    },
  };
  await exec.exec(command, null, options);

  return { output, error };
};
