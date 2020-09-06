import fs from 'fs';

function getFile(path): Promise<string> {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, 'utf8', function(err, success) {
      if (err) {
        reject(err);
      } else {
        resolve(success);
      }
    });
  });
}

export { getFile };
