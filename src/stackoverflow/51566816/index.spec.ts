import { getUserInfo } from './';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock
});

describe('getUserInfo', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });
  it('should get user info from session storage', () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    window.sessionStorage.setItem('userInfo', JSON.stringify({ userId: 1, userEmail: 'example@gmail.com' }));
    const actualValue = getUserInfo();
    expect(actualValue).toEqual({ userId: 1, userEmail: 'example@gmail.com' });
    expect(getItemSpy).toBeCalledWith('userInfo');
  });

  it('should get empty object if no user info in session storage', () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, 'getItem');
    const actualValue = getUserInfo();
    expect(actualValue).toEqual({});
    expect(window.sessionStorage.getItem).toBeCalledWith('userInfo');
    expect(getItemSpy).toBeCalledWith('userInfo');
  });
});
