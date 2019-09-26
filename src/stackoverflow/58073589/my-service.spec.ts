import { myFunction } from './my-service';
import { dependendantService } from './dependency-service-instance';

describe('myFunction', () => {
  it('return string, if dependendantService is not giving empty list', () => {
    const spy = jest.spyOn(dependendantService, 'list', 'get').mockReturnValueOnce([{}]);
    const actualValue = myFunction();
    expect(actualValue).toBe('xyz');
    expect(spy).toBeCalledTimes(1);
    spy.mockRestore();
  });

  it('throw erorr, if dependendantService is giving empty list', () => {
    const spy = jest.spyOn(dependendantService, 'list', 'get').mockReturnValueOnce([]);
    expect(() => myFunction()).toThrowError(new Error('list is empty'));
    expect(spy).toBeCalledTimes(1);
    spy.mockRestore();
  });
});
