import { checkEnvironmentVars } from './';

const originalEnv = Object.assign({}, process.env);

describe('checkEnvironmentVars', () => {
  it('should throw error when NODE_ENV is not set', () => {
    delete process.env.NODE_ENV;
    expect(() => checkEnvironmentVars()).toThrowError(Error('Process environment is required!'));
  });

  it('should throw error when NODE_ENV is invalid', () => {
    process.env.NODE_ENV = 'stage';
    expect(() => checkEnvironmentVars()).toThrowError(Error('Process environment not allowed! Choose another!'));
  });

  it('should pass the check', () => {
    process.env.NODE_ENV = 'local';
    expect(() => checkEnvironmentVars()).not.toThrow();
  });
});
