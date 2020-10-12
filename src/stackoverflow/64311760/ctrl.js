const request = require('request');

module.exports = {
  async validate(req, res) {
    var postBody = {
      url: 'url',
      form: req.body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    request.post(postBody, function(error, response, body) {
      if (error) {
        return res.status(200).json({ result: 'false' });
      } else {
        return res.status(200).json({ result: 'true' });
      }
    });
  },
};
