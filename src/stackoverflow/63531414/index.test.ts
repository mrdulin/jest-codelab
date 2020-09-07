import { Validate } from './validator';
import { mocked } from 'ts-jest/utils';

jest.mock('./validator');

describe('63531414', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it('should pass', async () => {
    mocked(Validate).mockImplementationOnce((params) => {
      return (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        const oFunc = descriptor.value;
        descriptor.value = function inner(...args: any[]) {
          console.log('mocked validator decorator implementation');
          const rval = oFunc.apply(this, args);
          return rval;
        };
      };
    });
    const { Controller } = require('./');
    const logSpy = jest.spyOn(console, 'log');
    const ctrl = new Controller();
    await ctrl.post({}, () => {});
    expect(Validate).toBeCalledWith('params');
    expect(logSpy).toBeCalledWith('real post implementation');
  });
});
