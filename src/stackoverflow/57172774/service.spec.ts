import { Service } from './service';

const service = new Service();
// console.log(service);

jest.mock('./service.ts', () => {
  const originalModule = jest.requireActual('./service.ts');
  const { Service: OriginalService } = originalModule;

  const ServiceMocked = {
    ...OriginalService.prototype,
    get: jest.fn(),
    post: jest.fn(),
    del: jest.fn()
  };

  return {
    Service: jest.fn(() => ServiceMocked)
  };
});

describe('Service', () => {
  it.skip('should do something', () => {
    service.get = jest.fn().mockReturnValueOnce('mocked data');
    const actualValue = service.doThis();
    expect(actualValue).toBe('mocked data');
    expect(service.get).toHaveBeenCalled();
  });
});
