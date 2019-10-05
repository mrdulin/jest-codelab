import { Db } from './Db';

const db = new Db();

export async function example(id) {
  await db.connect().catch(err => console.error(err));
  const Data = db.connection.collection('data');

  return Data.updateOne({ id }, { $set: { anything: 'else' } }).catch(err => console.error(err));
}
