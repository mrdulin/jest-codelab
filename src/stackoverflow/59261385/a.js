const request = require('request-promise');

module.exports = async () => {
  var options = {
    method: 'POST',
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
    const selectResult = await request(options);
    return selectResult;
  } catch (err) {
    return err;
  }
};
