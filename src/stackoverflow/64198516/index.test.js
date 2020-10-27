import { main } from './';
import { useCustomLocation } from './customhooks';

jest.mock('./customhooks');

describe('64198516', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass - 1', () => {
    useCustomLocation.mockReturnValueOnce('name=akash');
    const actual = main();
    expect(actual).toEqual('name=akash');
  });
  it('should pass - 2', () => {
    useCustomLocation.mockReturnValueOnce('name=teresa teng');
    const actual = main();
    expect(actual).toEqual('name=teresa teng');
  });
});
