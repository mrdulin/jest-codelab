/**
 * @jest-environment jsdom
 */
import { mySessionSetFunction } from './';

const sessionStorageBackup = (global as any).sessionStorage;

delete (global as any).sessionStorage;
(global as any).sessionStorage = {
  setItem: jest.fn()
};

describe('test suites', () => {
  afterAll(() => {
    (global as any).sessionStorage = sessionStorageBackup;
  });
  it('t1', () => {
    mySessionSetFunction();
    expect((global as any).sessionStorage.setItem).toBeCalledWith('name', 'jest');
    expect(jest.isMockFunction((global as any).sessionStorage.setItem)).toBeTruthy();
  });
});
