import UnderTest, { MockedDependency } from './UnderTest';

const mockedDeps: jest.Mocked<MockedDependency> = {
  returnSomething: jest.fn(),
  returnSomething2: jest.fn()
};

const underTest = new UnderTest(mockedDeps);

describe('UnderTest', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  describe('#methodUnderTest', () => {
    it('should correctly', () => {
      mockedDeps.returnSomething.mockReturnValueOnce('mocked result');
      const actualValue = underTest.methodUnderTest('1');
      expect(actualValue).toBe('mocked result');
      expect(mockedDeps.returnSomething).toBeCalledWith('1');
    });
  });

  describe('#methodUnderTest2', () => {
    it('should correctly', () => {
      mockedDeps.returnSomething2.mockReturnValueOnce('mocked result');
      const actualValue = underTest.methodUnderTest2('2', '3');
      expect(actualValue).toBe('mocked result');
      expect(mockedDeps.returnSomething2).toBeCalledWith('2', '3');
    });
  });
});
