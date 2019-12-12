import { SomeClass } from './';
import cloneDeep from 'lodash/cloneDeep';

jest.mock('lodash/cloneDeep', () => jest.fn());

describe('SomeClass', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    jest.resetAllMocks();
  });
  it('should pass', () => {
    jest.spyOn(SomeClass, 'getInfo');
    (cloneDeep as any).mockImplementationOnce((data) => {
      return require.requireActual('lodash/cloneDeep')(data);
    });
    const mRawBoard = { info: '123' };
    const actual = SomeClass.transformBoardBasicInfo(mRawBoard);
    expect(actual).toEqual({ info: '' });
    expect(cloneDeep).toBeCalledWith(mRawBoard);
    expect(SomeClass.getInfo).toBeCalledWith(mRawBoard);
  });
});
