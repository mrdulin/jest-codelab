// 通过定义class，在class中定义方法，通过commonjs方式导出该class，jest可以mock class中的方法

jest.mock('./module', () => {

  const genNameMock: jest.Mock<string> = jest.fn((): string => 'Aimee');
  //获取真实的模块
  const MyService = require.requireActual('./module');
  const myService: MyService = new MyService();

  return {
    genName: genNameMock,
    getMessage: myService.getMessage,
    getAge: myService.getAge
  };

});

const mMock = require('./module');

describe('mock function test suites', () => {

  it('t-1', () => {
    expect(jest.isMockFunction(mMock.genName)).toBeTruthy();
    expect(mMock.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(mMock.genName.mock.calls.length).toBe(1);
    expect(mMock.genName()).toBe('Aimee');
    expect(mMock.genName.mock.calls.length).toBe(2);
  });

  it('t-2', () => {
    mMock.getAge = jest.fn(() => 99);
    expect(jest.isMockFunction(mMock.getAge)).toBeTruthy();
    expect(mMock.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(mMock.genName.mock.calls.length).toBe(3);
  });

});
