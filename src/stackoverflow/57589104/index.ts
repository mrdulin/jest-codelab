import cp, { ExecException } from 'child_process';

const capRunnable = 'capRunnable';

export function executeCommandPromise(file: string, command: string) {
  return new Promise((resolve, reject) => {
    cp.exec(command, { cwd: `${file}` }, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      resolve(capRunnable);
    });
  });
}
