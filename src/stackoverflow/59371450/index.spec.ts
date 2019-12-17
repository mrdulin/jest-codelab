import { authorizer } from './';

describe('authorizer', () => {
  it('should authorize', () => {
    const event = 'message';
    const mockCallback = jest.fn().mockReturnValue('ok');
    authorizer(event, null, mockCallback);
    expect(mockCallback).toHaveBeenCalled();
  });
});
