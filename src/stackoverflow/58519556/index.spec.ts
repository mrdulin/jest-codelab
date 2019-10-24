import { searchBox } from './';

describe('searchBox', () => {
  let getElementByIdSpy;
  let mRow;
  beforeAll(() => {
    const mInput = { value: 'jest' } as any;
    mRow = {
      getElementsByClassName: jest
        .fn()
        .mockReturnValueOnce([{ innerHTML: 'jest' }])
        .mockReturnValueOnce([{ innerHTML: 'unit test' }]),
      style: { display: '' }
    };
    const mRows = [mRow];
    const mTable = { getElementsByClassName: jest.fn(() => mRows) };
    getElementByIdSpy = jest.spyOn(document, 'getElementById').mockImplementation(selector => {
      switch (selector) {
        case 'enter_search':
          return mInput;
        case 'env_tabulator':
          return mTable;
      }
    });
  });
  test('t1', () => {
    searchBox();
    expect(getElementByIdSpy.mock.calls[0]).toEqual(['enter_search']);
    expect(getElementByIdSpy.mock.calls[1]).toEqual(['env_tabulator']);
    expect(mRow.getElementsByClassName).toBeCalledWith('tabulator-cell');
    expect(mRow.style.display).toBe('');
  });

  test('t2', () => {
    searchBox();
    expect(getElementByIdSpy.mock.calls[0]).toEqual(['enter_search']);
    expect(getElementByIdSpy.mock.calls[1]).toEqual(['env_tabulator']);
    expect(mRow.getElementsByClassName).toBeCalledWith('tabulator-cell');
    expect(mRow.style.display).toBe('none');
  });
});
