const someModule = require('./index');

jest.mock('pg');

describe('someModule', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  it('callback is called', async () => {
    const text = 'QUERY TEXT';
    const params = { a: 1, b: 2 };
    const callback = jest.fn();
    const mRes = { rows: [1], rowCount: 1 };
    const DateNowSpy = jest
      .spyOn(Date, 'now')
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200);
    const pquerySpy = jest.spyOn(someModule, 'pquery').mockResolvedValueOnce(mRes);
    const logSpy = jest.spyOn(console, 'log');
    await someModule.query(text, params, callback);
    expect(callback).toBeCalledWith(undefined, mRes);
    expect(pquerySpy).toBeCalledWith(text, params);
    expect(logSpy).toBeCalledWith('executed query', { text, duration: 100, rows: mRes.rowCount });
    expect(DateNowSpy).toBeCalledTimes(2);
  });
});
