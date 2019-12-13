const serverScript = require('./helper');
describe('Test Class', () => {
  beforeAll(() => {});
  afterAll(() => {});

  beforeEach(() => {});

  afterEach(() => {});
  console.log('before tests');

  it('getRepoName', () => {
    const repoName = serverScript.getRepoName('git@github.com:me/repo');
    expect(repoName).toBe('repo');
  });

  it('getGitUser', async () => {
    serverScript.getGitUser = jest.fn().mockReturnValue(Promise.resolve('me'));
  });

  it('getGitEmail', async () => {
    serverScript.getGitEmail = jest.fn().mockReturnValue(Promise.resolve('my@email.com'));
  });

  it('getRepoInfo', async () => {
    serverScript.getRepoInfo = jest.fn().mockReturnValue(Promise.resolve('git@github.com:me/repo'));
  });

  it('getBranchName', async () => {
    serverScript.getBranchName = jest.fn().mockReturnValue(Promise.resolve('test2'));
  });

  it('getGitCommits', async () => {
    serverScript.getGitCommits = jest
      .fn()
      .mockReturnValue(
        Promise.resolve(['+ 7c7ca2c4284719c278f66eb61301daaa133a51fb', '+ 60989f60b8addddbbfe8c8ee415812b6783ae00e']),
      );
  });

  it('getGitPatchFromLocal', async () => {
    serverScript.getGitPatchFromLocal = jest
      .fn()
      .mockReturnValue(
        Promise.resolve(
          'diff --git a/Makefile b/Makefile\
    index 411cc21..fd24145 100644\
    --- a/Makefile\
    +++ b/Makefile\
    ..... \
    ',
        ),
      );
  });

  it('getGitPatchFromCommits', async () => {
    serverScript.getGitPatchFromCommits = jest
      .fn()
      .mockReturnValue(
        Promise.resolve(
          'diff --git a/README.rst b/README.rst\
    index 845a0ce..057c4bd 100644\
    --- a/README.rst\
    +++ b/README.rst\
   ....',
        ),
      );
  });

  it('deletePatchFile', async () => {
    serverScript.deletePatchFile = jest.fn().mockReturnValue(Promise.resolve('successfully removed patch file'));
  });
});
