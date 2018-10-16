import { getEnvVars, IEnvVars } from './envVars';

let env: IEnvVars;
beforeAll(async () => {
  env = await getEnvVars();
  console.log('c - beforeAll env:', env);
});

describe('c test suites', () => {
  console.log('c - env:', env);
  it('Test', () => {
    expect(1).toBe(1);
  });
});
