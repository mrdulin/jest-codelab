/**
 * @jest-environment jsdom
 */

import { funcToTest } from './';

describe('test suites', () => {
  it('onload', done => {
    const callback = jest.fn(status => {
      expect(status).toBe(true);
      done();
    });

    const imageUrl = 'https://github.com/mrdulin';
    const img = funcToTest(imageUrl, callback);
    if (img.onload) {
      const event: any = {};
      img.onload(event);
    }
  });

  it('onerror', done => {
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    const callback = jest.fn(status => {
      expect(status).toBe(false);
      done();
    });

    const imageUrl = 'https://github.com/mrdulin';
    const img = funcToTest(imageUrl, callback);
    if (img.onerror) {
      const event: any = { message: 'some error' };
      img.onerror(event);
      expect(consoleLogSpyOn).toBeCalledWith(event);
    }
    consoleLogSpyOn.mockRestore();
  });
});
