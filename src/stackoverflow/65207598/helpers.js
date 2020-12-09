const searchValue = async (fooId, db) => {
  return await db.collection('foos').findOne({ fooId: fooId });
};
