import { TableName } from './TableName';

export async function main() {
  const hashkey = 'hashkey';
  const rangekey = 'rangekey';
  const moreItems = {};
  const tableName = await new TableName({
    hashkey,
    rangekey,
    ...moreItems
  }).save();
}
