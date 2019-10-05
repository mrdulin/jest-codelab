/**
 * jest对象是在每个test文件中都可以拿到的全局对象.
 * jest对象上的方法可以帮助创建mock，已经控制jest的总体行为
 *
 * 调用所有jest对象上的方法最后都返回jest对象本身，用来链式调用
 */

const globalMockFn = jest.fn();
globalMockFn();
globalMockFn();

describe('jest', () => {
  const commonMockFn = jest.fn();
  commonMockFn();
  commonMockFn();

  describe('mock', () => {
    // 使用jest.mock可以显式mock模块
    // jest配置项中，automock配置项默认是false, 也就是说，在测试文件中，通过require(moduleName)引入模块，该模块默认是不被mock的，是真实的模块
    // 但是对于核心模块，例如nodejs中的fs模块，就算开启automock，jest也是默认不mock fs模块的，这时候需要手动显式调用jest.mock('fs')来mock fs模块。

    it('Mocks a module with an auto-mocked version when it is being required. ', () => {
      // 显式mock了banana模块
      jest.mock('./banana');
      const banana = require('./banana');

      // 因为banana模块被mock了，而且jest.mock没有指定一个模块工厂函数去实现该banana模块的行为，所以调用banana时，返回undefined
      expect(banana()).toBeUndefined();
    });

    // 在上一个单元测试里，使用jest.mock('./banana')， mock了banana模块，下面这个单元测试，用来测试banana模块require后，是否还是mock的模块
    it('测试jest.mock的影响范围', () => {
      const banana = require('./banana');
      // 结论是，尽管jest.mock是在某一个单元测试的函数作用域中调用（如上面的单元测试），但因为jest对象在一个测试文件中是全局对象，
      // 因此jest.mock的模块，在整个文件中使用require加载后，都是加载的mock过的模块
      expect(banana()).toBeUndefined();
    });

    it("The second argument can be used to specify an explicit module factory that is being run instead of using Jest's automocking feature:", () => {
      // 显式mock了apple模块，而且通过jest.mock的第二个参数指定了一个函数用来实现apple模块的行为
      jest.mock('./apple', () => jest.fn(() => 'apple is good'));
      const apple = require('./apple');

      expect(apple()).toBe('apple is good');
    });

    it("The third argument can be used to create virtual mocks – mocks of modules that don't exist anywhere in the system", () => {
      // jest.mock的第三个参数{virtual: true}表明，该mock的模块是不存在于真实的文件系统中的，而是虚拟的
      // jest.mock()返回jest对象，可以链式调用
      jest
        .mock('../zxm', () => jest.fn(() => 'fxxk zxm'), { virtual: true })
        .mock('../yk', () => jest.fn(() => 'fxxk yk'), { virtual: true });

      const zxm = require('../zxm');
      const yk = require('../yk');

      expect(zxm()).toBe('fxxk zxm');
      expect(yk()).toBe('fxxk yk');
    });
  });

  describe('isMockFunction', () => {
    it('globalMockFn should be a mock function', () => {
      expect(jest.isMockFunction(globalMockFn)).toBeTruthy();
    });

    it('apple module should be a mock function', () => {
      const apple = require('./apple');
      expect(jest.isMockFunction(apple)).toBeTruthy();
    });

    it('virtual module zxm should be a mock function', () => {
      const zxm = require('../zxm');
      expect(jest.isMockFunction(zxm)).toBeTruthy();
    });

    it('virtual module yk should be a mock function', () => {
      const yk = require('../yk');
      expect(jest.isMockFunction(yk)).toBeTruthy();
    });

    it('grape module should not be a mock function', () => {
      const grape = require('./grape');
      expect(jest.isMockFunction(grape)).toBeFalsy();
    });
  });

  describe('clearAllMocks', () => {
    // 清除所有mock的mock.calls和mock.instances，等价于在每一个mock函数上调用.mockClear()方法
    const mockFn = jest.fn();
    mockFn();
    mockFn();

    it('Clears the mock.calls and mock.instances properties of all mocks. Equivalent to calling .mockClear() on every mocked function.', () => {
      const mockFnV1 = jest.fn();
      const mockFnV2 = jest.fn();
      mockFnV1();
      mockFnV1();
      mockFnV2();
      mockFnV2();

      expect(mockFnV1.mock.calls).toHaveLength(2);
      expect(mockFnV2.mock.calls).toHaveLength(2);
      expect(mockFnV1.mock.instances).toHaveLength(2);
      expect(mockFnV2.mock.instances).toHaveLength(2);

      expect(mockFn.mock.calls).toHaveLength(2);
      expect(commonMockFn.mock.calls).toHaveLength(2);
      expect(globalMockFn.mock.calls).toHaveLength(2);
      expect(mockFn.mock.instances).toHaveLength(2);
      expect(commonMockFn.mock.instances).toHaveLength(2);
      expect(globalMockFn.mock.instances).toHaveLength(2);

      jest.clearAllMocks();

      expect(mockFnV1.mock.calls).toHaveLength(0);
      expect(mockFnV2.mock.calls).toHaveLength(0);
      expect(mockFnV1.mock.instances).toHaveLength(0);
      expect(mockFnV2.mock.instances).toHaveLength(0);

      // 可以看到，jest.clearAllMocks()方法，会清除本测试文件中，所有mock函数的mock.calls和mock.instances
      expect(mockFn.mock.calls).toHaveLength(0);
      expect(commonMockFn.mock.calls).toHaveLength(0);
      expect(globalMockFn.mock.calls).toHaveLength(0);
      expect(mockFn.mock.instances).toHaveLength(0);
      expect(commonMockFn.mock.instances).toHaveLength(0);
      expect(globalMockFn.mock.instances).toHaveLength(0);
    });
  });

  describe('resetAllMocks', () => {
    // 重置所有mock状态，包括mock.calls，mock.instances，以及mock的implementation，等价于在每个mockFn上调用.mockReset()方法
  });

  describe('unmock', () => {
    it('should be require the real grape module', () => {
      const grape = require('./grape');
      expect(grape()).toBe('grape');
    });

    it('should be get the real grape module', () => {
      jest.doMock('./grape', () => jest.fn(() => 'grape is good'));
      const grapeMocked = require('./grape');
      expect(grapeMocked()).toBe('grape is good');

      jest.dontMock('./grape');
      const grapeUnmocked = require('./grape');
      expect(grapeUnmocked()).toBe('grape');
    });
  });
});
