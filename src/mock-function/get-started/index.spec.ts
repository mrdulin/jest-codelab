/**
 * mock functions
 *
 * mock函数可以模拟一个函数，我们可以只模拟这个函数最终的返回值，用来隔离模块依赖。
 *
 * 比如, 函数A的函数体中包含函数B，但是我们要测试的是函数A，并不关心函数B，我们只知道函数B执行后会返回一个值，这时候，我们可以通过mock函数B，mock函数B的返回值，用来测试。
 * 相当于把函数A和函数B的依赖隔离了。
 *
 * 可以通过const mockFn = jest.fn(implementation)创建mock函数，如果implementation没有指定，则调用mockFn时，返回值是undefined
 *
 */

describe('mockFn test suites', () => {
  describe('mockFn.mock.calls', () => {
    it(
      'An array that represents all calls that have been made into this mock function. Each call is represented by an array of arguments that' +
        ' were passed during the call',
      () => {
        const mockFn = jest.fn();
        mockFn(1, 2);
        mockFn(3, 4);
        expect(mockFn.mock.calls[0]).toEqual([1, 2]);
        expect(mockFn.mock.calls[1]).toEqual([3, 4]);
        expect(mockFn.mock.calls).toHaveLength(2);
      }
    );
  });

  describe('mockFn.mock.instances', () => {
    // mockFn.mock.instances是一个数组，包含了所有从jest.fn()实例化的对象

    it('A mock function that has been instantiated twice would have the following mock.instances array', () => {
      const mockFn = jest.fn();
      const a = new mockFn();
      const b = new mockFn();

      expect(mockFn.mock.instances[0]).toEqual(a);
      expect(mockFn.mock.instances[1]).toEqual(b);
      expect(mockFn.mock.instances).toHaveLength(2);
    });

    it('without new', () => {
      const mockFn = jest.fn();
      mockFn(0, 1);
      expect(mockFn.mock.instances).toHaveLength(1);

      mockFn(2, 3);
      expect(mockFn.mock.instances).toHaveLength(2);

      console.log(mockFn.mock.instances);
    });
  });

  describe('mockFn.mockClear()', () => {
    // 重置mockFn.mock.calls和 mockFn.mock.instances中的数据
    // 如果要在两个断言之间进行一些清理工作，使用这个方法比较合适
    // 执行mockFn.mockClear()将会替换mockFn.mock，而不仅仅是清空mockFn.mock.calls 和 mockFn.mock.instances, 因此，需要避免把mockFn.mock赋值给其他变量，以防止通过该变量访问到老旧数据

    it('Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.', () => {
      const mockFn = jest.fn();
      mockFn('emilie', 26);

      expect(mockFn.mock.calls[0]).toEqual(['emilie', 26]);
      expect(mockFn.mock.calls).toHaveLength(1);

      // 在下个expect断言之前进行mockFn的清理工作
      mockFn.mockClear();

      expect(mockFn.mock.calls[0]).toBeUndefined();
      expect(mockFn.mock.calls).toHaveLength(0);
    });
  });

  describe('mockFn.mockReset()', () => {
    // 替换mockFn.mock，重置所有mock信息，包括mockFn.mock.instances和mockFn.mock.calls，以及mockFn的实现

    it('Resets all information stored in the mock, including any inital implementation given.', () => {
      // 给mockImplementation传入一个方法，用来实现该mockFn的功能
      const mockFn = jest.fn().mockImplementation((name: string) => `HI! ${name.toUpperCase()}`);

      const a: string = mockFn('emilie');
      expect(a).toBe('HI! EMILIE');

      expect(mockFn.mock.calls[0]).toEqual(['emilie']);
      expect(mockFn.mock.calls).toHaveLength(1);

      mockFn.mockReset();

      expect(mockFn.mock.calls).toHaveLength(0);
      expect(mockFn.mock.instances).toHaveLength(0);

      const b = mockFn('novaline');
      expect(b).not.toBe('HI! NOVALINE');

      expect(mockFn.mock.calls[0]).toEqual(['novaline']);
      expect(mockFn.mock.calls).toHaveLength(1);
      expect(mockFn.mock.instances).toHaveLength(1);
    });
  });

  describe('mockFn.mockRestore()', () => {});

  describe('mockFn.mockImplementation(fn)', () => {
    // 给mockImplementation传入一个方法，用来实现该mockFn的功能

    it(
      'Accepts a function that should be used as the implementation of the mock. ' +
        'The mock itself will still record all calls that go into and instances that come from itself – ' +
        'the only difference is that the implementation will also be executed when the mock is called.',
      () => {
        const mockFn = jest.fn();
        mockFn.mockImplementation((num: number): number => num + 42);

        const a: number = mockFn(1);
        const b: number = mockFn(2);

        expect(a).toBe(43);
        expect(b).toBe(44);

        expect(mockFn.mock.calls[0]).toEqual([1]);
        expect(mockFn.mock.calls[1]).toEqual([2]);
        expect(mockFn.mock.calls).toHaveLength(2);

        // 清理mockFn.mock.instances和mock
        mockFn.mockClear();

        expect(mockFn.mock.calls).toHaveLength(0);

        const c: number = mockFn(3);
        expect(c).toBe(45);

        expect(mockFn.mock.calls[0]).toEqual([3]);
        expect(mockFn.mock.calls).toHaveLength(1);
      }
    );

    it('mockImplementation can also be used to mock class constructors', () => {});
  });

  describe('mockFn.mockImplementationOnce(fn)', () => {
    // 给mockImplementationOnce传入一个方法，用来实现该mockFn的功能，但是只对一次调用生效，一次调用完，就清除该实现方法
    it(
      'Accepts a function that will be used as an implementation of the mock for one call to the mocked function. ' +
        'Can be chained so that multiple function calls produce different results.',
      () => {
        const mf = jest.fn();
        mf.mockImplementationOnce((): string => 'emilie').mockImplementationOnce((): string => 'emily is away');

        expect(mf()).toBe('emilie');
        expect(mf()).toBe('emily is away');
        expect(mf()).toBeUndefined();

        expect(mf.mock.instances).toHaveLength(3);
        expect(mf.mock.calls[0]).toEqual([]);
        expect(mf.mock.calls).toHaveLength(3);
      }
    );

    it(
      'When the mocked function runs out of implementations defined with mockImplementationOnce, ' +
        'it will execute the default implementation set with jest.fn(() => defaultValue) or ' +
        '.mockImplementation(() => defaultValue) if they were called',
      () => {
        const mf = jest.fn((): string => 'default');
        mf.mockImplementationOnce((): string => 'first call').mockImplementationOnce((): string => 'second call');

        expect(mf()).toBe('first call');
        expect(mf()).toBe('second call');
        expect(mf()).toBe('default');
        expect(mf()).toBe('default');
        expect(mf()).toBe('default');

        expect(mf.mock.instances).toHaveLength(5);
        expect(mf.mock.calls).toHaveLength(5);
      }
    );
  });

  describe('mockFn.mockReturnThis()', () => {
    // TODO
    // it('should be return mockFn this', () => {
    //   const me: any = {name: 'novaline'};
    //
    //   function sayHello(this: any): string {
    //     console.log('this', this);
    //     return this.name;
    //   }
    //
    //   const sayHelloBoundToMe = sayHello.bind(me);
    //
    //   const mockFn: jest.Mock<any> = jest.fn(sayHelloBoundToMe);
    //
    //   expect(mockFn.mockReturnThis()).toEqual(me);
    // });
  });

  describe('mockFn.mockReturnValue(value)', () => {
    // mock一个值

    // it('Deprecated: Use jest.fn(() => value) instead.', () => {

    //   const mockFn = jest.fn();
    //   mockFn.mockReturnValue('emilie');

    //   expect(mockFn()).toBe('emilie');
    // });

    it('Use jest.fn(() => value)', () => {
      const mockFn = jest.fn(() => 42);
      expect(mockFn()).toBe(42);
    });
  });

  describe('mockFn.mockReturnValueOnce(value)', () => {
    it('should be return mock value once', () => {
      const mockFn = jest.fn();
      mockFn.mockReturnValueOnce('emilie');

      expect(mockFn()).toBe('emilie');
      expect(mockFn()).toBeUndefined();

      mockFn.mockReturnValueOnce('emily is away');

      expect(mockFn()).toBe('emily is away');
      expect(mockFn()).toBeUndefined();
    });
  });
});
