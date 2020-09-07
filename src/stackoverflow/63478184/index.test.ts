import { main, MyInterface } from './';
import { mocked } from 'ts-jest/utils';

describe('63478184', () => {
  it('should pass', () => {
    const obj: MyInterface = {
      someFunc: jest.fn().mockReturnValueOnce('mocked value'),
    };
    main(obj);
    expect(mocked(obj.someFunc).mock.calls.length).toBe(1);
  });
});
