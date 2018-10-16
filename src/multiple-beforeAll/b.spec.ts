import { envVars, IEnvVars } from './envVars';

let env: IEnvVars;
beforeAll(async () => {
  env = await envVars;
  console.log('b - beforeAll env:', env);
});

describe('b test suites', () => {
  console.log('b - env:', env);
  it('Test', () => {
    expect(1).toBe(1);
  });
});
