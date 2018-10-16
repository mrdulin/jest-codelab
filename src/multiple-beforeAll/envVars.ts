interface IEnvVars {
  apiKey: string;
  baseUrl: string;
  [key: string]: string;
}
function getEnvVars(): Promise<IEnvVars> {
  return new Promise(resolve => {
    setTimeout(() => {
      const envs: IEnvVars = {
        apiKey: '123',
        baseUrl: 'https://github.com'
      };
      resolve(envs);
    }, 1000);
  });
}

const envVars: Promise<IEnvVars> = (async () => await getEnvVars())();

export { envVars, IEnvVars, getEnvVars };
