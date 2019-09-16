module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node'
  testEnvironment: 'enzyme',
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  }
};
