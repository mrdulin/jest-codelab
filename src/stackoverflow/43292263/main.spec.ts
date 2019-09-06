import * as someModule from './sharedMocks';
import { main } from './main';

jest.mock('./someModule.ts', () => someModule);

describe('test suites A', () => {
  it('t1', () => {
    someModule.findById.mockReturnValueOnce('mocked data');
    const actualValue = main();
    expect(actualValue).toBe('mocked data');
  });
});
