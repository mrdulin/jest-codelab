import MyService from './module';
const myService: MyService = new MyService();

describe('mock function test suites', () => {
  it('t-1', () => {
    const methods: PropertyKey[] = Reflect.ownKeys(Reflect.getPrototypeOf(myService)).filter(
      (fn: PropertyKey) => fn !== 'constructor'
    );

    console.log(methods);

    for (const method of methods) {
      expect(jest.isMockFunction((myService as any)[method])).toBeFalsy();
    }
  });

  it('t-2', () => {
    myService.genName = jest.fn((): string => 'Aimee');
    expect(jest.isMockFunction(myService.genName)).toBeTruthy();
    expect(myService.getMessage()).toBe('Her name is Aimee, age is 26');
    expect((myService.genName as jest.Mock<string>).mock.calls.length).toBe(1);
    expect(myService.genName()).toBe('Aimee');
    expect((myService.genName as jest.Mock<string>).mock.calls.length).toBe(2);
  });

  it('t-3', () => {
    myService.getAge = jest.fn((): number => 99);
    expect(jest.isMockFunction(myService.getAge)).toBeTruthy();
    expect(myService.getMessage()).toBe('Her name is Aimee, age is 99');
    expect((myService.genName as jest.Mock<string>).mock.calls.length).toBe(3);
  });
});
