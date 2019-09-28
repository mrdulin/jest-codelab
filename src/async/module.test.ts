import { fetchData, fetchDataV2 } from './module';

import User from './User';

describe('async code test suites', () => {
  describe('fetchData callback pattern', () => {
    // 默认地，jest的每个测试用例在it函数执行完成后就完成了。
    // 不要这样测试
    // 例如t-1, 测试用例it的函数在fetchData调用callback之前就完成了。所以callback不会被调用，callback中的expect也就不能按照期望那样执行。

    it.skip('t-1', () => {
      expect.assertions(0);

      function callback(data) {
        expect(data).toEqual({ name: 'novaline', age: 26 });
      }

      fetchData(callback);
    });

    // 解决方案：测试用例it函数接收一个参数，如t-2，接收done参数，作用是，测试用例在调用done之前会一直等待，也就是说，只有手动调用了done，该
    // 测试用例才算执行完毕。
    // 如果done从未被调用，该测试用例会失败

    it('t-2', (done: jest.DoneCallback) => {
      // expect.assertions(number) - 在测试用例执行完毕后，验证断言执行的次数。对于测试异步代码很有用，验证在异步回调中的断言是否执行了。
      // 其实应该验证的是异步回调是否执行，如果像t-1那样错误的写法，测试用例先于异步回调执行完毕。
      // 例如下面的例子，在callback中，expect断言执行了一次。
      expect.assertions(1);
      function callback(err: Error | null, data?: User) {
        if (err) {
          done.fail(err);
        }
        expect(data).toEqual({ name: 'novaline', age: 26 });
        done();
      }
      fetchData(callback);
    });

    it('t-3', (done: jest.DoneCallback) => {
      expect.assertions(1);
      function callback(err: Error | null, data?: User) {
        if (err) {
          done.fail(err);
        }
        expect(data).toEqual({ name: 'novaline', age: 26 });
        done();
      }
      fetchData(callback);
    });
  });

  describe('fetchDataV2 promise pattern', () => {
    // 如果你的异步方法返回一个promise，测试的方式是直接在测试用例it函数中返回这个promise, jest会等待这个promise resolve，
    // 如果这个promise reject了，则该测试用例失败。

    // t-0这个测试用例是不正确的，没有返回promise, 这个测试用例会在异步方法(fetchData_v2)执行完毕之前执行完毕
    it.skip('t-0', () => {
      expect.assertions(1);
      fetchDataV2(1).then(data => {
        expect(data).toEqual({ name: 'novaline', age: 26 });
      });
    });

    // promise.then/promise.catch
    it('t-1 - promise.then', () => {
      expect.assertions(1);
      return fetchDataV2(1).then((data: User) => {
        expect(data).toEqual({ name: 'novaline', age: 26 });
      });
    });

    it('t-2 promise.catch', () => {
      expect.assertions(1);
      return fetchDataV2(-1).catch((e: string) => {
        expect(e).toEqual(new Error('user not exist'));
      });
    });

    // 对于Jest 20.0.0+版本, 新增了.resolves/.rejects
    it('t-3 - resolves', () => {
      expect.assertions(1);
      return (expect(fetchDataV2(1)) as any).resolves.toEqual({ name: 'novaline', age: 26 });
    });

    it('t-4 - rejects', () => {
      expect.assertions(1);
      return (expect(fetchDataV2(-1)) as any).rejects.toEqual(new Error('user not exist'));
    });

    // async/await
    it('t-5 - async/await', async () => {
      expect.assertions(1);
      const user: User = await fetchDataV2(1);
      expect(user).toEqual({ name: 'novaline', age: 26 });
    });

    it('t-6 - async/await try-catch', async () => {
      expect.assertions(1);
      try {
        await fetchDataV2(-1);
      } catch (e) {
        expect(e).toEqual(new Error('user not exist'));
      }
    });
  });
});
