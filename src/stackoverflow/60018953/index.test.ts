import main from './';
import git from 'simple-git/promise';

jest.mock('simple-git/promise', () => {
  const mGit = {
    checkout: jest.fn(),
  };
  return jest.fn(() => mGit);
});

describe('60018953', () => {
  it('should pass', () => {
    main();
    expect(git().checkout).toBeCalledWith('https://github.com/user/repo.git');
  });
});
