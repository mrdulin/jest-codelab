import Busboy from 'busboy';

export function main() {
  const busboy = new Busboy({});
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    console.log(
      'File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype,
    );
  });
}
