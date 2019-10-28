module.exports = {
  preset: 'ts-jest',
  // testEnvironment: 'node'
  testEnvironment: 'enzyme',
  setupFiles: ['/Users/ldu020/workspace/github.com/mrdulin/jest-codelab/src/stackoverflow/58585527/window.setup.js'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16'
  },
  coverageReporters: ['json', 'text', 'lcov', 'clover']
};
