import { Overlay } from './';

jest.mock('./globals', () => ({
  document: {
    getElementsByTagName: jest.fn().mockReturnValue('foo'),
  },
}));

describe('46431638', () => {
  it('should mock and pass', () => {
    jest.spyOn(console, 'log');
    Overlay();
    expect(console.log).toBeCalledWith('foo');
  });
});
