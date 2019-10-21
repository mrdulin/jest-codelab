import { Sample, TestCaseArgumentsType } from './sampleTest';

describe('User Route', () => {
  let sample = new Sample();
  // Test suite
  describe('GET Request', () => {
    // Preparing Test Suite
    beforeAll(async () => {
      sample.args = <TestCaseArgumentsType>{ url: `sampleUrl` };
    }, 20000);
    // Executing
    sample.sampleTestFunction();
  });
});
