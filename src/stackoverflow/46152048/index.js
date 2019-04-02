import pg from 'pg';
import { someAsyncFunction } from './someAsyncFunction';

const someConnectionString = 'someConnectionString';
const test = 'test';

module.exports = async (event, context, callback) => {
  const client = new pg.Client(someConnectionString);
  try {
    await client.connect();
  } catch (e) {
    return callback(e);
  }
  try {
    await client.query(await someAsyncFunction(test));
    client.end();
    return callback(null, 'success');
  } catch (e) {
    client.end();
    return callback(e);
  }
};
