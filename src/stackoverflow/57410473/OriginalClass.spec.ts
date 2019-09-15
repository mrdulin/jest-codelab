import { OriginalClass } from './OriginalClass';

describe('OriginalClass', () => {
  it('should mock correctly', () => {
    jest.spyOn(OriginalClass, 'call').mockReturnValue(`test`);
    const actualValue = OriginalClass.testCall();
    expect(actualValue).toBe('test');
    (OriginalClass.call as jest.MockedFunction<typeof OriginalClass.call>).mockRestore();
  });
  it('should restore to original implementation', () => {
    expect(jest.isMockFunction(OriginalClass.call)).toBeFalsy();
  });
});
