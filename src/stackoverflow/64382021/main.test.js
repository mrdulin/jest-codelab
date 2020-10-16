import './main';
import { Handler } from './handler/handler.js';
jest.mock('./handler/handler.js', () => {
  return { Handler: jest.fn() };
});

describe('64382021', () => {
  it('should pass', async () => {
    expect(Handler).toBeCalledWith('windowAlias', 'documentAlias');
  });
});
