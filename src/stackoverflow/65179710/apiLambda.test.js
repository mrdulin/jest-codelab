const { runLambda } = require('./testUtils');

describe('on new query', () => {
  it('returns data', async (done) => {
    await runLambda(
      ['person', ['John']],
      (query) => {
        expect(query).toHaveBeenCalledWith(['person', ['John']], null);
      },
      done,
    );
  });
});
