const { APILambda } = require('./apiLambda');
// 5. You passed `args` parameter, but you didn't use it, I use it below based on the meaning of code
async function runLambda(args, assertions, done) {
  const query = jest.fn(() => {
    return Promise.resolve({
      name: 'John',
      lastName: 'Wayne',
    });
  });
  // 1. create mock for `connection.end()` method.
  const end = jest.fn();

  // 3. You should return an array to resolve multiple values for connection.then()
  const onNewQuery = APILambda(async () => [{ query, end }, args, null]);

  const event = {};
  const context = {};
  await onNewQuery(event, context, (err, result) => {
    if (err) done(err);
    assertions(query);
    // 2. you should NOT pass successful result to done() callback
    done();
  });
}

module.exports = { runLambda };
