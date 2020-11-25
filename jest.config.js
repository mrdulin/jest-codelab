module.exports = {
  preset: 'ts-jest/presets/js-with-ts',

  // testEnvironment: 'node',
  testEnvironment: 'enzyme',
  setupFiles: [
    // '/Users/ldu020/workspace/github.com/mrdulin/jest-codelab/src/stackoverflow/58585527/window.setup.js'
    // '/Users/ldu020/workspace/github.com/mrdulin/jest-codelab/src/stackoverflow/45702292/chai.setup.js'
  ],
  setupFilesAfterEnv: ['jest-enzyme', './jest.setup.js'],
  testEnvironmentOptions: {
    enzymeAdapter: 'react16',
  },
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/src/import-undefined-issue'],
  verbose: true,
};

// module.exports = {
//   preset: 'ts-jest/presets/js-with-ts',
//   testEnvironment: 'jsdom',
// };
