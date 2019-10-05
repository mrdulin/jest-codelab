import { MyClass } from './';

const myClass = new MyClass();

describe('MyClass.func1', () => {
  it('returns true', async () => {
    const func2Spy = jest.spyOn(myClass, 'func2').mockImplementation(() => true);
    const actualValue = await myClass.func1();
    expect(actualValue).toBeTruthy();
    func2Spy.mockRestore();
  });
});

describe('myClass.func2', () => {
  it('returns false if argument is 0', () => {
    expect(myClass.func2(0)).toBe(false);
  });
});
