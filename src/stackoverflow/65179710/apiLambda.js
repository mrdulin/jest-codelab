exports.APILambda = (databaseConnection) => {
  return function(event, context, callback) {
    context.callbackWaitsForEmptyEventLoop = false;

    const connection = databaseConnection();

    connection
      .then(([connection, query, args]) => {
        connection
          // 4. You didn't provide `queries` function, so I just pass `query` and `args` parameters directly.
          .query(query, args)
          .then((result) => {
            console.log(result);
            connection.end();
            callback(null, { data: result });
          })
          .catch((err) => {
            throw err;
          });
      })
      .catch((err) => {
        console.error(`${err.stack}`);
        callback(err);
      });
  };
};
