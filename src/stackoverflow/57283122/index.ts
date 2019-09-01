import https from 'https';

const response = {
  status(code: number) {
    console.log('status code: ', code);
    return response;
  },
  json(data: any) {
    console.log(JSON.stringify(data));
    return response;
  }
};

function getTodo(res = response) {
  https
    .get('https://jsonplaceholder.typicode.com/todos/1', apiRes => {
      console.log('statusCode:', apiRes.statusCode);
      console.log('headers:', apiRes.headers);

      apiRes.on('data', d => {
        process.stdout.write(d);
        res.status(200).json({ message: 'message' });
      });
    })
    .on('error', e => {
      console.error(e);
      res.status(500).json({ error: 'error' });
    });
}

export { getTodo };
