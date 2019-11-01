jest.mock('node-fetch');

const fetch = require('node-fetch');
const { Response, Headers } = jest.requireActual('node-fetch');
const mod = require('./');

const meta = {
  'Content-Type': 'application/json',
  Accept: '*/*',
  'Breaking-Bad': '<3'
};
const headers = new Headers(meta);
const copyOfHeaders = new Headers(headers);

const ResponseInit = {
  status: 200,
  statusText: 'fail',
  headers: headers
};

test('Basic Test', async () => {
  const token = '';
  const downloadDocumentData = { data: {} };
  const getDocList = new Response(JSON.stringify(downloadDocumentData), ResponseInit);
  fetch.mockResolvedValueOnce(Promise.resolve(getDocList));
  const res = await mod.doSomething('mock', token);
  expect(res).toEqual({ data: {} });
  expect(fetch).toBeCalledWith('mock');
});
