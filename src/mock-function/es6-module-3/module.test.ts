import * as m from './module';

describe('mock function test suites', () => {
  // 在一个文件中使用export导出多个函数，mock m.genName函数失败
  it('t-1', () => {
    // m.genName = jest.fn(() => 'emilie');
    // expect(jest.isMockFunction(m.genName)).toBeTruthy();
    // expect(m.genName()).toBe('emilie');
    // expect(m.getMessage()).toEqual('Her name is emilie, age is 26');
    // expect(m.genName).toHaveBeenCalled();
  });
});
