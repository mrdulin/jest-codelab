const { MyClient } = require('./some-service');

const invokeMe = async (input1, input2) => {
  const client = new MyClient({
    name: 'my-name',
  });

  return await client
    .invoke({
      input1,
      input2,
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = invokeMe;
