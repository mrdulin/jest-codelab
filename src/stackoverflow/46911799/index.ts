import fs from 'fs';

function readdirSync(path) {
  return fs.readdirSync(path);
}

export { readdirSync };
