import { SomeClass } from '.';
import { ApiActions } from './ApiActions';

jest.mock('./ApiActions.ts', () => {
  return {
    post: jest.fn()
  };
});

describe('SomeClass', () => {
  it('t1', () => {
    (ApiActions.post as jest.MockedFunction<typeof ApiActions.post>).mockImplementationOnce((uri, data, callback) => {
      callback();
    });
  });
});
