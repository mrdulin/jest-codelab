import { bootstrap } from './App';
import * as utils from './Utils';

describe('bootstrap', () => {
  it('should mock utils.add method correctly', () => {
    const addStub = jest.spyOn(utils, 'add').mockReturnValueOnce(2);
    const actual = bootstrap();
    expect(actual).toBe(2);
    expect(addStub).toBeCalledTimes(1);
    addStub.mockRestore();
  });

  it('should pass', () => {
    expect(utils.add()).toBe(1);
  });
});
