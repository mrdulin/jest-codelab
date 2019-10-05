import A from './A';
import { Y } from './util';

jest.mock('./util.ts', () => {
  return {
    Y: jest.fn()
  };
});

const a = new A();

describe('A', () => {
  it('should execute function Y correctly', () => {
    const mockedReq = {};
    const mockedRes = {};
    a.X(mockedReq, mockedRes);
    expect(Y).toBeCalledTimes(1);
  });
});
