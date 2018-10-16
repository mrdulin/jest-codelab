import { envVars, IEnvVars } from './envVars';

let env: IEnvVars;
beforeAll(async () => {
  env = await envVars;
  console.log('a - beforeAll env:', env);
});

describe('a test suites', () => {
  console.log('a - describe scope env:', env);
  it('Test', () => {
    console.log('a - test case scope env:', env);
    expect(1).toBe(1);
  });
});
