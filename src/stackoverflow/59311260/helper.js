import { exec } from 'child_process';

// extract repo name from url
function getRepoName(url) {
  let repoName = url.split('/');
  repoName = repoName[repoName.length - 1];
  repoName = repoName.replace('.git', '');
  repoName = repoName.replace('\n', '');
  return repoName;
}

// delete patch file
async function deletePatchFile() {
  return new Promise((resolve, reject) => {
    exec('rm myPatch.patch', (error) => {
      if (error !== null) {
        console.log('exec error deleting patch file: ', error);
        reject(error);
      }
      resolve('successfully removed patch file');
    });
  });
}
async function getRepoInfo() {
  return new Promise((resolve, reject) => {
    exec('git config --get remote.origin.url', (error, stdout) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
        reject(error);
      }

      const repoUrl = stdout.replace('\n', '');
      resolve(repoUrl);
    });
  });
}

async function getGitEmail() {
  return new Promise((resolve, reject) => {
    exec('git config --global user.email', (error, stdout) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
        reject(error);
      } else {
        resolve(stdout.replace('\n', ''));
      }
    });
  });
}

async function getGitUser() {
  return new Promise((resolve, reject) => {
    exec('git config --global user.name', (error, stdout) => {
      if (error !== null) {
        console.log(`exec error: ${error}`);
        reject(error);
      } else {
        resolve(stdout.replace('\n', ''));
      }
    });
  });
}

module.exports = {
  getRepoName,
  deletePatchFile,
  getRepoInfo,
  getGitEmail,
  getGitUser,
};
