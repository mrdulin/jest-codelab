const request = require('request-promise');

module.exports = async () => {
  var options = {
    uri: 'fsdsfd',
    headers: {
      'content-type': 'application/json',
    },
    body: {
      A: 'A',
      B: 'B',
    },
    json: true,
  };

  try {
    const selectResult = await request.post(options);
    return selectResult;
  } catch (err) {
    return err;
  }
};
