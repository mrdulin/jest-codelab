import { Sample, TestCaseArgumentsType } from './sampleTest';

describe('User Route', () => {
  let sample = new Sample();
  // Test suite
  describe('GET Request', () => {
    // Preparing Test Suite
    console.log('===execute 1===');
    sample.args = <TestCaseArgumentsType>{ url: `another sampleUrl` };
    beforeAll(async () => {
      console.log('===execute 3===');
      sample.args = <TestCaseArgumentsType>{ url: `sampleUrl` };
    }, 20000);
    // Executing
    sample.sampleTestFunction();
  });
});
