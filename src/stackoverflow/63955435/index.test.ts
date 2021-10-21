// import rewire from 'rewire';

describe('63955435', () => {
  // it('should return something', () => {
  //   const mod = rewire('./');
  //   const revert = mod.__set__('cachedSecret', true);
  //   const actual = mod.find();
  //   expect(actual).toEqual('something');
  //   revert();
  // });

  it('should return something else', () => {
    const mod = require('./');
    const actual = mod.find();
    expect(actual).toEqual('something else');
  });
});
