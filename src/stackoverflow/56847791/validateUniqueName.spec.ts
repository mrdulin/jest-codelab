import validateUniqueName from './validateUniqueName';
import { serverErrorResponseUtil } from './serverErrorResponseUtil';

jest.mock('./serverErrorResponseUtil.ts', () => {
  return {
    serverErrorResponseUtil: jest.fn()
  };
});

describe('validateUniqueName', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should THROW an error if the given value already exists', async () => {
    const responseMocked = { data: [{ name: 'someValue' }] };
    const serviceMocked = jest.fn().mockResolvedValue(responseMocked);
    await expect(validateUniqueName('someValue', serviceMocked, 'someName')).rejects.toBeUndefined();
    expect(serverErrorResponseUtil).toBeCalledWith(new Error('someName already exists'));
  });

  it('should ACCEPT the data if the pass name is unique', async () => {
    const responseMocked = { data: [{ name: 'jest' }] };
    const serviceMocked = jest.fn().mockResolvedValue(responseMocked);
    await expect(validateUniqueName('ts', serviceMocked, 'someName')).resolves.toBeUndefined();
    expect(serverErrorResponseUtil).not.toBeCalled();
  });
});
