const Datastore = require('@google-cloud/datastore');
const datastore = Datastore();

const runQueryDS = (query) => datastore.runQuery(query);
const createQueryDS = (kind) => datastore.createQuery(kind);

const listEntities = (kind, runQuery = runQueryDS, createQuery = createQueryDS) => {
  console.log('listEntities');
  const query = createQuery(kind);
  return runQuery(query).then((results) => results[0]);
};

module.exports = { listEntities };
