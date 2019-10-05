import m from './module';
import { IObj } from './interfaces';

// 通过定义一个对象，并将所有方法作为对象的属性，导出该对象的方式，jest可以成功mock该对象内的方法
describe('mock function test suites', () => {
  it('t-0', () => {
    const methods: PropertyKey[] = Reflect.ownKeys(m).filter((fn: any) => fn !== 'constructor');
    expect(methods).toEqual(['getMessage', 'genName', 'getAge']);

    for (const method of methods) {
      expect(jest.isMockFunction((m as any)[method])).toBeFalsy();
    }
  });

  it('t-1', () => {
    expect(m.genName()).toBe('novaline');
    expect(m.getAge()).toBe(26);
    expect(m.getMessage()).toBe('Her name is novaline, age is 26');
  });

  it('t-2', () => {
    const genNameImplementation = (): string => 'Aimee';
    m.genName = jest.fn(genNameImplementation);

    const isMockFunction = jest.isMockFunction(m.genName);
    expect(isMockFunction).toBeTruthy();

    expect(m.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(m.genName).toHaveBeenCalled();
    expect((m.genName as jest.Mock<string>).mock.calls.length).toBe(1);
  });

  it('t-3', () => {
    const getAgeImplementation = (): number => 99;
    type MKeyOfIObj = keyof IObj;
    const getAgeSpyInstance = jest.spyOn<IObj, MKeyOfIObj>(m, 'getAge').mockImplementation(getAgeImplementation);
    expect(m.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(getAgeSpyInstance).toHaveBeenCalled();

    getAgeSpyInstance.mockReset();
    getAgeSpyInstance.mockRestore();
  });

  it('t-4', () => {
    expect(jest.isMockFunction(m.getAge)).toBeFalsy();
  });
});
