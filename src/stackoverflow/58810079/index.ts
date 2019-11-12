import fs from 'fs';

export const viewText = () => {
  fs.readFile('poem.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
