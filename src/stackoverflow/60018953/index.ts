import git from 'simple-git/promise';

function main() {
  git().checkout('https://github.com/user/repo.git');
}

export default main;
