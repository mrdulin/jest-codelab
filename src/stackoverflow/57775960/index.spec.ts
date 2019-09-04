import UnderTest from './';

jest.mock('./someService.ts');

const underTest = new UnderTest();

describe('UnderTest', () => {
  it('t1', async () => {
    console.log = jest.fn();
    await underTest.update('jest');
    expect(console.log).toBeCalledWith('mocked data');
  });
});
