import UnderTest from './';

const mockedSomeService = {
  saveNewElement: jest.fn().mockResolvedValue('mocked data')
};

jest.mock('./someService.ts', () => {
  return {
    SomeService: jest.fn(() => mockedSomeService)
  };
});

const underTest = new UnderTest();

describe('UnderTest', () => {
  it('t1', async () => {
    console.log = jest.fn();
    await underTest.update('jest');
    expect(console.log).toBeCalledWith('mocked data');
  });
});
