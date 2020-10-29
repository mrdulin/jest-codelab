import { mocked } from 'ts-jest/utils';

interface SomeInterface {
  validate(): boolean;
}
declare type MockableFunction = (...args: any[]) => any;
declare type MethodKeysOf<T> = {
  [K in keyof T]: T[K] extends MockableFunction ? K : never;
}[keyof T];
declare type PropertyKeysOf<T> = {
  [K in keyof T]: T[K] extends MockableFunction ? never : K;
}[keyof T];
declare type ArgumentsOf<T> = T extends (...args: infer A) => any ? A : never;
declare type ConstructorArgumentsOf<T> = T extends new (...args: infer A) => any ? A : never;
interface MockWithArgs<T extends MockableFunction> extends jest.MockInstance<ReturnType<T>, ArgumentsOf<T>> {
  new (...args: ConstructorArgumentsOf<T>): T;
  (...args: ArgumentsOf<T>): ReturnType<T>;
}
declare type MaybeMockedConstructor<T> = T extends new (...args: any[]) => infer R ? jest.MockInstance<R, ConstructorArgumentsOf<T>> : {};
declare type MockedFunction<T extends MockableFunction> = MockWithArgs<T> &
  {
    [K in keyof T]: T[K];
  };
declare type MockedObject<T> = MaybeMockedConstructor<T> &
  {
    [K in MethodKeysOf<T>]: T[K] extends MockableFunction ? MockedFunction<T[K]> : T[K];
  } &
  {
    [K in PropertyKeysOf<T>]: T[K];
  };

const UserValidator: SomeInterface = {
  validate: () => true,
};

async function someFunction() {
  return [UserValidator];
}

describe('run test', () => {
  let mockedValidators: Array<MockedObject<SomeInterface>>;
  beforeAll(async () => {
    mockedValidators = (await someFunction()).map((v: SomeInterface) => mocked(v));
  });
});
