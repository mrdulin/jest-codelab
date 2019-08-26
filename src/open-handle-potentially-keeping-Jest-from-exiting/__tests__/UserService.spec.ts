jest.useFakeTimers();
import { UserService } from '../UserService';

describe('UserService', () => {
  it('should find user by id correctly', () => {
    const actualValue = UserService.findById();
    expect(actualValue).toBe('slideshowp2');
  });
});
