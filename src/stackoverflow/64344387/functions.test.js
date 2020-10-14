const app = require('./functions.js');

describe('64344387', () => {
  it('should pass', async () => {
    jest.spyOn(app, 'func2').mockImplementationOnce(async () => null);
    const actual = await app.func2();
    expect(actual).toBeNull();
    expect(app.func2).toBeCalled();
  });
});
