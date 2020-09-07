import { main } from './';

describe('63570675', () => {
  it('should pass', () => {
    Object.defineProperty(window.screen, 'orientation', {
      value: { type: 'landscape-primary' },
    });
    const actual = main();
    expect(actual).toEqual('landscape-primary');
  });
});
